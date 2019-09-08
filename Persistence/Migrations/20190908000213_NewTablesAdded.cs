using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class NewTablesAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Masters",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    BirthPlace = table.Column<string>(nullable: true),
                    BirthDate = table.Column<DateTime>(nullable: true),
                    DeathDate = table.Column<DateTime>(nullable: true),
                    Bio = table.Column<string>(nullable: true),
                    Photo = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Masters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pieces",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    MasterId = table.Column<int>(nullable: false),
                    StyleId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    ComposeDate = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    CreateDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pieces", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Profiles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ProfileId = table.Column<Guid>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profiles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Styles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Styles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    RoleId = table.Column<int>(nullable: false),
                    UserName = table.Column<string>(nullable: true),
                    createDate = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Masters",
                columns: new[] { "Id", "Bio", "BirthDate", "BirthPlace", "CreateDate", "DeathDate", "FirstName", "IsActive", "LastName", "Photo" },
                values: new object[] { 1, "Bio to be submitted later...", new DateTime(1770, 12, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bonn, Germany", new DateTime(2019, 9, 7, 19, 2, 13, 576, DateTimeKind.Local).AddTicks(1470), new DateTime(1827, 3, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), "Ludwig Van", true, "Beethoven", "/images/beethoven.jpg" });

            migrationBuilder.InsertData(
                table: "Masters",
                columns: new[] { "Id", "Bio", "BirthDate", "BirthPlace", "CreateDate", "DeathDate", "FirstName", "IsActive", "LastName", "Photo" },
                values: new object[] { 2, "Bio to be submitted later...", new DateTime(1756, 1, 27, 0, 0, 0, 0, DateTimeKind.Unspecified), "Salzburg, Austria", new DateTime(2019, 9, 7, 19, 2, 13, 587, DateTimeKind.Local).AddTicks(4140), new DateTime(1791, 12, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Wolfgang Amadeus", true, "Mozart", "/images/mozart.jpg" });

            migrationBuilder.InsertData(
                table: "Masters",
                columns: new[] { "Id", "Bio", "BirthDate", "BirthPlace", "CreateDate", "DeathDate", "FirstName", "IsActive", "LastName", "Photo" },
                values: new object[] { 3, "Bio to be submitted later...", new DateTime(1810, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Żelazowa Wola, Poland", new DateTime(2019, 9, 7, 19, 2, 13, 587, DateTimeKind.Local).AddTicks(4160), new DateTime(1849, 10, 17, 0, 0, 0, 0, DateTimeKind.Unspecified), "Frédéric", true, "Chopin", "/images/chopin.jpg" });

            migrationBuilder.InsertData(
                table: "Masters",
                columns: new[] { "Id", "Bio", "BirthDate", "BirthPlace", "CreateDate", "DeathDate", "FirstName", "IsActive", "LastName", "Photo" },
                values: new object[] { 4, "Bio to be submitted later...", new DateTime(1862, 8, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Saint-Germain-en-Laye, France", new DateTime(2019, 9, 7, 19, 2, 13, 587, DateTimeKind.Local).AddTicks(4170), new DateTime(1918, 3, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Claude", true, "Debussy", "/images/debussy.jpg" });

            migrationBuilder.InsertData(
                table: "Masters",
                columns: new[] { "Id", "Bio", "BirthDate", "BirthPlace", "CreateDate", "DeathDate", "FirstName", "IsActive", "LastName", "Photo" },
                values: new object[] { 5, "Bio to be submitted later...", new DateTime(1811, 10, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Raiding, Austria", new DateTime(2019, 9, 7, 19, 2, 13, 587, DateTimeKind.Local).AddTicks(4180), new DateTime(1886, 7, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), "Franz", true, "Liszt", "/images/liszt.jpg" });

            migrationBuilder.InsertData(
                table: "Masters",
                columns: new[] { "Id", "Bio", "BirthDate", "BirthPlace", "CreateDate", "DeathDate", "FirstName", "IsActive", "LastName", "Photo" },
                values: new object[] { 6, "Bio to be submitted later...", new DateTime(1873, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), " Novgorod, Russia", new DateTime(2019, 9, 7, 19, 2, 13, 587, DateTimeKind.Local).AddTicks(4180), new DateTime(1943, 3, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "Sergei", true, "Rachmaninoff", "/images/rachmaninoff.jpg" });

            migrationBuilder.InsertData(
                table: "Masters",
                columns: new[] { "Id", "Bio", "BirthDate", "BirthPlace", "CreateDate", "DeathDate", "FirstName", "IsActive", "LastName", "Photo" },
                values: new object[] { 7, "Bio to be submitted later...", new DateTime(1867, 11, 24, 0, 0, 0, 0, DateTimeKind.Unspecified), " Novgorod, Russia", new DateTime(2019, 9, 7, 19, 2, 13, 587, DateTimeKind.Local).AddTicks(4190), new DateTime(1917, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Scott", true, "Joplin", "/images/joplin.jpg" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Baroque" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Galant" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Classical" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 4, "Romantic" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 5, "Impressionism" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 6, "Expressionism" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 7, "Neoclassicism" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 8, "Experimental" });

            migrationBuilder.InsertData(
                table: "Styles",
                columns: new[] { "Id", "Name" },
                values: new object[] { 9, "Minimalism" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Masters");

            migrationBuilder.DropTable(
                name: "Pieces");

            migrationBuilder.DropTable(
                name: "Profiles");

            migrationBuilder.DropTable(
                name: "Styles");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
