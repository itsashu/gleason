using GleasonAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GleasonAPI.Controllers
{
    public class UsersController : ApiController
    {
        [HttpGet]
        [Route("api/users/getAllUsers")]
        public HttpResponseMessage Get()
        {
            try
            {
                using (GleasonDBEntities entities = new GleasonDBEntities())
                {
                    List<User> users = entities.Users.ToList();
                    if (users != null)
                    {
                        return Request.CreateResponse(HttpStatusCode.OK, users);
                    }
                    else
                    {
                        return Request.CreateResponse(HttpStatusCode.NotFound, "User not found");
                    }
                }
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Unable to fetch user", e);
            }
        }


        [HttpPost]
        [Route("api/users/getUser")]
        public HttpResponseMessage GetUser([FromBody] Payload payload)
        {
            try
            {
                if(payload == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "provide username and password");
                }
                else { 
                    using (GleasonDBEntities entities = new GleasonDBEntities())
                    {
                        User user = entities.Users.FirstOrDefault(usr => usr.Username == payload.userName && usr.UserPassword == payload.password);
                        if (user != null)
                        {
                            return Request.CreateResponse(HttpStatusCode.OK, user);
                        }
                        else
                        {
                            return Request.CreateResponse(HttpStatusCode.NotFound, "User not found");
                        }
                    }
                }
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Unable to fetch user", e);
            }
        }

        // POST api/values
        [HttpPost]
        [Route("api/users/saveUser")]
        public HttpResponseMessage Post([FromBody] User user)
        {
            try
            {
                if (user == null)
                {
                    return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "provide username and password");
                }
                else
                {
                    User newUser = new User { Username = user.Username, UserPassword = user.UserPassword, Roles = user.Roles, Actions = user.Actions, UserAddress = user.UserAddress };
                    using (GleasonDBEntities entities = new GleasonDBEntities())
                    {
                        entities.Users.Add(newUser);
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.NoContent);
                    }
                }
            }
            catch(Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Unable to save", e);
            }

        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
