using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pensive.Services.Interfaces;

namespace Pensive.API.Controllers
{
    [ApiController]
    [Route("api/reviews/types")]
    public class ReviewTypeController : Controller
    {
        private readonly IReviewTypeService _reviewTypeService;
        
        public ReviewTypeController(IReviewTypeService reviewTypeService)
        {
            _reviewTypeService = reviewTypeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var reviewTypeList = await _reviewTypeService.GetAllAsync();
            return Ok(reviewTypeList);
        }

        [HttpGet]
        [Route("{code}")]
        public async Task<IActionResult> Get(string code)
        {
            var reviewType = await _reviewTypeService.GetByCode(code);
            if (reviewType == null)
            {
                return NotFound();
            }

            return Ok(reviewType);
        }
    }
}