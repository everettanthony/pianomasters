using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Masters;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MastersController : ControllerBase
    {
        private readonly IMediator _mediator;
        public MastersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // GET api/masters
        [HttpGet]
        public async Task<ActionResult<List<Master>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        // GET api/masters/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Master>> Details(int id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }

        // POST api/masters
        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command) 
        {
            return await _mediator.Send(command);
        }

        // PUT api/masters/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        // DELETE api/masters/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await _mediator.Send(new Delete.Command{Id = id});
        }
    }
}
