using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Masters
{
    public class Create
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
            public bool IsActive { get; set; }
            public DateTime CreateDate { get; set;}
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
                var master = new Master 
                {
                    Id = request.Id,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    BirthDate = request.BirthDate,
                    DeathDate = request.DeathDate,
                    Bio = request.Bio,
                    Photo = request.Photo,
                    IsActive = request.IsActive,
                    CreateDate = DateTime.Now
                };

                _context.Masters.Add(master);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}