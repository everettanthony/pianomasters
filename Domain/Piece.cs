using System;

namespace Domain
{
    public class Piece
    {
        public int Id { get; set; }
        public int MasterId { get; set; }
        public int StyleId { get; set; }
        public string Name { get; set;}
        public DateTime ComposeDate { get; set;}
        public bool IsActive { get; set; }
        public DateTime CreateDate { get; set;}
    }
}