namespace Pensive.Data.Entities
{
    public class Review
    {
        public int Id { get; set; }
        public ReviewType Type { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public int Mark { get; set; }
        public string PosterUrl { get; set; }
    }
}