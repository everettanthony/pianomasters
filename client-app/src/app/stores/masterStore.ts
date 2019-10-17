import { observable, action, computed, configure, runInAction } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import { IMaster } from '../models/master';
import agent from '../api/agent';
import { history } from '../..';

configure({enforceActions: 'always'});

class MasterStore {
  @observable masterRegistry = new Map();
  @observable master: IMaster | null = null;
  @observable loadingInitial = false;
  @observable submitting = false;
  @observable target = '';

  // Sort by Id
  @computed get mastersById() {
    return Array.from(this.masterRegistry.values()).sort(
      (a, b) => a.id - b.id
    );
  }

  // Sort by Date
  @computed get mastersByDate() {
    return this.groupMastersByDate(Array.from(this.masterRegistry.values()));
  }

  // Group By Date
  groupMastersByDate(masters: IMaster[]) {
    const sortedMasters = masters.sort(
      (a, b) => a.birthDate.getTime() - b.birthDate.getTime()
    );

    return Object.entries(sortedMasters.reduce((masters, master) => {
      const birthDate = master.birthDate.toISOString().split('T')[0];
      masters[birthDate] = masters[birthDate] ? [...masters[birthDate], master] : [master];
      return masters;
    }, {} as {[key: string]: IMaster[]}));
  }

  @action loadMasters = async () => {
    this.loadingInitial = true;
    try {
      const masters = await agent.Masters.list();
      runInAction('loading piano masters', () => {
        masters.forEach(master => {
          master.birthDate = new Date(master.birthDate);
          this.masterRegistry.set(master.id, master);
        });
        this.loadingInitial = false;
      })
    } catch (error) {
      runInAction('piano masters load error', () => {
        this.loadingInitial = false;
      })
    }
  };

  @action loadMaster = async (id: string) => {
    let master = this.getMaster(id);
    if (master) {
      this.master = master;
      return master;
    } else {
      this.loadingInitial = true;
      try {
        master = await agent.Masters.details(id);
        runInAction('loading piano master',() => {
          master.birthDate = new Date(master.birthDate);
          this.master = master;
          this.masterRegistry.set(master.id, master);
          this.loadingInitial = false;
        })
        return master;
      } catch (error) {
        runInAction('piano master loading error', () => {
          this.loadingInitial = false;
        })
        console.log(error);
      }
    }
  }

  @action clearMaster = () => {
    this.master = null;
  }

  getMaster = (id: string) => {
    return this.masterRegistry.get(id);
  }

  @action createMaster = async (master: IMaster) => {
    this.submitting = true;
    try {
      await agent.Masters.create(master);
      runInAction('create piano master ', () => {
        this.masterRegistry.set(master.id, master);
        this.submitting = false;
      })
      history.push(`/masters/${master.id}`)
    } catch (error) {
      runInAction('create piano master error', () => {
        this.submitting = false;
      })
      console.log(error.response);
    }
  };

  @action editMaster = async (master: IMaster) => {
    this.submitting = true;
    try {
      await agent.Masters.update(master);
      runInAction('editing activity', () => {
        this.masterRegistry.set(master.id, master);
        this.master = master;
        this.submitting = false;
      })
      history.push(`/masters/${master.id}`)
    } catch (error) {
      runInAction('edit piano master error', () => {
        this.submitting = false;
      })
      console.log(error);
    }
  };

  @action deleteMaster = async (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    try {
      await agent.Masters.delete(id);
      runInAction('deleting piano master', () => {
        this.masterRegistry.delete(id);
        this.submitting = false;
        this.target = '';
      })
    } catch (error) {
      runInAction('delete piano master error', () => {
        this.submitting = false;
        this.target = '';
      })
      console.log(error);
    }
  }
}

export default createContext(new MasterStore());
