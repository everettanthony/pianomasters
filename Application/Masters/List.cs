using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Masters
{
    public class List
    {
        public class Query : IRequest<List<Master>> { }

        public class Handler : IRequestHandler<Query, List<Master>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<List<Master>> Handle(Query request,
                CancellationToken cancellationToken)
            {
                var masters = await _context.Masters.ToListAsync();

                return masters;
            }
        }
    }
}