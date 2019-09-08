using System;

namespace Domain
{
    public class User
    {
        public Guid Id { get; set; }
        public int RoleId { get; set; }
        public string UserName { get; set; }
        public DateTime createDate { get; set; }
        public bool IsActive { get; set; }
    }
}