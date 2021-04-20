using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Pensive.Services.Interfaces;
using Pensive.Services.Models;

namespace Pensive.API.Controllers
{
    [Route("api/reviews")]
    public class ReviewController
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet]
        public async Task<List<ReviewModel>> GetAll()
        {
            return await _reviewService.GetAllAsync();
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<ReviewModel> Get(int id)
        {
            return await _reviewService.GetAsync(id);
        }
    }
}