using System;

namespace Domain
{
    public class Master
    {
        public int Id { get; set; }
        public string FirstName { get; set;}
        public string LastName { get; set;}
        public string FullName { get => FirstName + " " + LastName; }
        public string BirthPlace { get; set;}
        public DateTime? BirthDate { get; set;}
        public string BirthDateFormatted { get => BirthDate.HasValue ? BirthDate.Value.ToString("MMMM d, yyyy") : "No Birth Date Added"; }
        public DateTime? DeathDate { get; set;}
        public string DeathDateFormatted { get => DeathDate.HasValue ? DeathDate.Value.ToString("MMMM d, yyyy") : "No Death Date Added"; }
        public string Bio { get; set; }
        public string Photo { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreateDate { get; set;}
    }
}
