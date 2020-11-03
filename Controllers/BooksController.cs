using System;
using Book_App.Data;
using Microsoft.AspNetCore.Mvc;

namespace Book_App.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private IBookService _service;

        public BooksController(IBookService service) {
            _service = service;
        }

        [HttpPost]
        public IActionResult AddBook([FromBody]Book book)
        {
            try
            {
                if (book.Author != null && book.Title != null && book.Description != null )
                {
                    _service.AddBook(book);
                    return Ok(book);
                }
                return BadRequest("Book was not added");
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }

        [HttpGet]
        public IActionResult GetAllBooks() {
            var allBooks = _service.GetAllBooks();

            return Ok(allBooks);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBook(int id, [FromBody]Book book)
        {
            _service.UpdateBook(id, book);
            return Ok(book);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            _service.DeleteBook(id);
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetBookById(int id)
        {
            var book = _service.GetBookById(id);
            return Ok(book);
        }
    }
}