import React from 'react'

function Register() {
 return (
    <section class="vh-100 ">
  <div class="container py-5 h-100 bg-opacity-90">
    <div class="row d-flex justify-content-center align-items-center h-100 w-100">
      <div class="col">
        <div class="card" style={{borderRadius:"1rem"}}>
          <div class="row">
            <div class="col-lg-6" id='imge'>
              <img src="https://img.freepik.com/free-vector/chef-cartoon_6329-26.jpg?size=338&ext=jpg"
                alt="login form" class="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="card-body p-lg-5  text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <center><span class="h1 fw-bold mb-0">FOH Register</span></center>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Register your account</h5>

                  <div class="form-outline mb-4">
                    <input type="name" id="form2Example17" class="form-control form-control-lg" required/>
                    <label class="form-label" for="form2Example17">Name</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" required/>
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-danger btn-lg btn-block" type="submit" >Register</button>
                  </div>

                  {/* <a class="small text-muted" href="#!">Forgot password?</a> */}
                  <p class="mb-5 pb-lg-2" style={{color:'#393f81'}}>Already have an account? <a href="/login"
                      style={{color:"#393f81"}}>Login here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Register