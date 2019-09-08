using System;

namespace Domain
{
    public class Profile
    {
        public int Id { get; set; }
        public Guid ProfileId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}