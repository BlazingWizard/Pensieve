using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Pensive.Services.Interfaces;
using Pensive.Services.Models;

namespace Pensive.API.Controllers
{
    [ApiController]
    [Route("api/reviews")]
    public class ReviewController : Controller
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]ReviewModel reviewModel)
        {
            try
            {
                var review = await _reviewService.CreateAsync(reviewModel);
                return Ok(review);
            }
            catch (Exception e)
            {
              return BadRequest(e.Message); 
            }
            
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] ReviewModel reviewModel)
        {
            if (id != reviewModel.Id)
            {
                return BadRequest("ID in url and Form not equal");
            }

            try
            {
                await _reviewService.UpdateAsync(reviewModel);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
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

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _reviewService.DeleteAsync(id);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode((int) HttpStatusCode.BadRequest, e.Message); 
            }
        }
    }
}