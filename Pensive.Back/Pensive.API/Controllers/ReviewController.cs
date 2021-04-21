using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pensive.Services.Interfaces;

namespace Pensive.API.Controllers
{
    [Route("api/reviews")]
    public class ReviewController : Controller
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var reviewList = await _reviewService.GetAllAsync();
            return Ok(reviewList);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var review = await _reviewService.GetAsync(id);
            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }
    }
}