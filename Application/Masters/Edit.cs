using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Masters
{
    public class Edit
    {
        public class Command : IRequest
        {            
            public int Id { get; set; }
            public string FirstName { get; set;}
            public string LastName { get; set;}
            public string BirthPlace { get; set;}
            public DateTime? BirthDate { get; set;}
            public DateTime? DeathDate { get; set;}
            public string Bio { get; set; }
            public string Photo { get; set; }
            public bool? IsActive { get; set; }
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
                    throw new Exception("No Piano Master Found.");

                master.FirstName = request.FirstName ?? master.FirstName;    
                master.LastName = request.LastName ?? master.LastName;    
                master.BirthPlace = request.BirthPlace ?? master.BirthPlace;    
                master.BirthDate = request.BirthDate ?? master.BirthDate;    
                master.DeathDate = request.DeathDate ?? master.DeathDate;    
                master.Bio = request.Bio ?? master.Bio;    
                master.Photo = request.Photo ?? master.Photo;    
                master.IsActive = request.IsActive ?? master.IsActive;      
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}