import { observable, action, computed, configure, runInAction } from 'mobx';
import { createContext, SyntheticEvent } from 'react';
import { IMaster } from '../models/master';
import agent from '../api/agent';

configure({enforceActions: 'always'});

class MasterStore {
    @observable masterRegistry = new Map();
    @observable masters: IMaster[] = []; 
    @observable selectedMaster: IMaster | undefined;
    @observable loadingInitial = false;
    @observable editMode = false;
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
      return Array.from(this.masterRegistry.values()).sort(
        (a, b) => Date.parse(a.createDate) - Date.parse(b.createDate)
      );
    }

    @action loadMasters = async () => {
        this.loadingInitial = true;

        try {
            const masters = await agent.Masters.list();
            runInAction('loading piano masters', () => {
                masters.forEach(master => {
                    master.birthDate = master.birthDate.split('.')[0];
                    master.deathDate = master.deathDate.split('.')[0];
                    this.masterRegistry.set(master.id, master);
                });
                this.loadingInitial = false;
            });   
        } 
        catch (error) {
            runInAction('load piano masters error', () => {
              this.loadingInitial = false;
            });
        } 
    }

    @action createMaster = async (master: IMaster) => {
        this.submitting = true;

        try {
          await agent.Masters.create(master);
          runInAction('create piano master', () => {
            this.masterRegistry.set(master.id, master);
            this.editMode = false;
            this.submitting = false;
          });
        } 
        catch (error) {
          runInAction('create piano master error', () => {
            this.submitting = false;
          });
          console.log(error);
        }
    }

    @action editMaster = async (master: IMaster) => {
        this.submitting = true;

        try {
          await agent.Masters.update(master);
          runInAction('editing piano master', () => {
            this.masterRegistry.set(master.id, master);
            this.selectedMaster = master;
            this.editMode = false;
            this.submitting = false;
          }); 
        } 
        catch (error) {
          runInAction('edit piano master error', () => {
            this.submitting = false;
          });
          console.log(error);
        }
    }

    @action deleteMaster = async (event: SyntheticEvent<HTMLButtonElement>, id: number) => {
        this.submitting = true;
        this.target = event.currentTarget.name;

        try {
          await agent.Masters.delete(id);
          runInAction('deleting piano master', () => {
            this.masterRegistry.delete(id);
            this.submitting = false;
            this.target = '';
          });
        } 
        catch (error) {
          runInAction('delete piano master error', () => {
            this.submitting = false;
            this.target = '';
          });
          console.log(error);
        }
    }

    @action openCreateForm = () => {
        this.editMode = true;
        this.selectedMaster = undefined;
    }

    @action openEditForm = (id: number) => {
        this.selectedMaster = this.masterRegistry.get(id);
        this.editMode = true;
    }

    @action cancelSelectedMaster = () => {
        this.selectedMaster = undefined;
    }
    
    @action cancelFormOpen = () => {
        this.editMode = false;
    }

    @action selectMaster = (id: number) => {
        this.selectedMaster = this.masterRegistry.get(id);
        this.editMode = false;
    }
}

export default createContext(new MasterStore());