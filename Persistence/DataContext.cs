using System;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions options) : base(options)
        {}

        public DbSet<Master> Masters { get; set; }
        public DbSet<Piece> Pieces { get; set; }
        public DbSet<Style> Styles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) 
        {
            builder.Entity<Master>().HasData(
                new Master {
                    Id = 1,
                    FirstName = "Ludwig Van",
                    LastName = "Beethoven",
                    BirthPlace = "Bonn, Germany",
                    BirthDate = new DateTime(1770, 12, 07),
                    DeathDate = new DateTime(1827, 03, 27),
                    Bio = "Bio to be submitted later...",
                    Photo = "/images/beethoven.jpg",
                    IsActive = true,
                    CreateDate = DateTime.Now
                },
                new Master {
                    Id = 2,
                    FirstName = "Wolfgang Amadeus",
                    LastName = "Mozart",
                    BirthPlace = "Salzburg, Austria",
                    BirthDate = new DateTime(1756, 01, 27),
                    DeathDate = new DateTime(1791, 12, 05),
                    Bio = "Bio to be submitted later...",
                    Photo = "/images/mozart.jpg",
                    IsActive = true,
                    CreateDate = DateTime.Now
                },
                new Master {
                    Id = 3,
                    FirstName = "Frédéric",
                    LastName = "Chopin",
                    BirthPlace = "Żelazowa Wola, Poland",
                    BirthDate = new DateTime(1810, 03, 01),
                    DeathDate = new DateTime(1849, 10, 17),
                    Bio = "Bio to be submitted later...",
                    Photo = "/images/chopin.jpg",
                    IsActive = true,
                    CreateDate = DateTime.Now
                },
                new Master {
                    Id = 4,
                    FirstName = "Claude",
                    LastName = "Debussy",
                    BirthPlace = "Saint-Germain-en-Laye, France",
                    BirthDate = new DateTime(1862, 08, 22),
                    DeathDate = new DateTime(1918, 03, 25),
                    Bio = "Bio to be submitted later...",
                    Photo = "/images/debussy.jpg",
                    IsActive = true,
                    CreateDate = DateTime.Now
                },
                new Master {
                    Id = 5,
                    FirstName = "Franz",
                    LastName = "Liszt",
                    BirthPlace = "Raiding, Austria",
                    BirthDate = new DateTime(1811, 10, 22),
                    DeathDate = new DateTime(1886, 07, 31),
                    Bio = "Bio to be submitted later...",
                    Photo = "/images/liszt.jpg",
                    IsActive = true,
                    CreateDate = DateTime.Now
                },
                new Master {
                    Id = 6,
                    FirstName = "Sergei",
                    LastName = "Rachmaninoff",
                    BirthPlace = " Novgorod, Russia",
                    BirthDate = new DateTime(1873, 04, 01),
                    DeathDate = new DateTime(1943, 03, 28),
                    Bio = "Bio to be submitted later...",
                    Photo = "/images/rachmaninoff.jpg",
                    IsActive = true,
                    CreateDate = DateTime.Now
                },
                new Master {
                    Id = 7,
                    FirstName = "Scott",
                    LastName = "Joplin",
                    BirthPlace = " Novgorod, Russia",
                    BirthDate = new DateTime(1867, 11, 24),
                    DeathDate = new DateTime(1917, 04, 01),
                    Bio = "Bio to be submitted later...",
                    Photo = "/images/joplin.jpg",
                    IsActive = true,
                    CreateDate = DateTime.Now
                }
            );

            builder.Entity<Style>().HasData(
                new Style { Id = 1, Name = "Baroque" },
                new Style { Id = 2, Name = "Galant" },
                new Style { Id = 3, Name = "Classical" },
                new Style { Id = 4, Name = "Romantic" },
                new Style { Id = 5, Name = "Impressionism" },
                new Style { Id = 6, Name = "Expressionism" },
                new Style { Id = 7, Name = "Neoclassicism" },
                new Style { Id = 8, Name = "Experimental" },
                new Style { Id = 9, Name = "Minimalism" }
            );
        }
    }
}
