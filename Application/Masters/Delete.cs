using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using MediatR;
using Persistence;

namespace Application.Masters
{
    public class Delete
    {
            public class Command : IRequest
            {
                public int Id { get; set; }
            }
    
            public class Handler : IRequestHandler<Command>
            {
                private readonly DataContext _context;
                public Handler(DataContext context)
                {
                    _context = context;
                }
    
                public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
                {
                    var master = await _context.Masters.FindAsync(request.Id); 
                    if (master == null)
                        throw new RestException(HttpStatusCode.NotFound, new {master = "Not found"});

                    _context.Remove(master);

                    var success = await _context.SaveChangesAsync() > 0;

                    if (success) return Unit.Value;

                    throw new Exception("There was a proble during this delete action.");
                }
        } 
    }
}