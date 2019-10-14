using MediatR;
using Domain;
using System;
using System.Threading;
using System.Threading.Tasks;
using Persistence;
using Application.Errors;
using System.Net;

namespace Application.Masters
{
    public class Details
    {
        public class Query : IRequest<Master>
        {
            public int Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Master>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Master> Handle(Query request, CancellationToken cancellationToken)
            {
                var master = await _context.Masters.FindAsync(request.Id);

                if (master == null)
                    throw new RestException(HttpStatusCode.NotFound, new {master = "Not found"});

                return master;
            }
        }
    }
}