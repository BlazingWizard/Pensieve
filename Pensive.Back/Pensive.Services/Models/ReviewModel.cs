namespace Pensive.Services.Models
{
    public class ReviewModel
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public int Mark { get; set; }
        public string PosterUrl { get; set; }
    }
}