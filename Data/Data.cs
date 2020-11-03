using System;
using System.Collections.Generic;

namespace Book_App.Data
{
    public static class Data
    {
        public static List<Book> Books => allBooks;

        static List<Book> allBooks = new List<Book>()
        {
            new Book()
            {
                Id=1,
                Title="This is A Book Title",
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Author="John Doe",
                Rate=(double)4.9,
                DateStart= new DateTime(2020, 01, 01),
                DateRead= null
            },

            new Book()
            {
                Id=2,
                Title="This is A Book Title Two",
                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Author="John Doe",
                Rate=(double)4.4,
                DateStart= new DateTime(2019, 11, 04),
                DateRead= null
            }
        };
    }
}