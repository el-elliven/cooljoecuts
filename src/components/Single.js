import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Single extends Component{
    render(){
        return(
            <div>
<section class="inner-page-banner" id="home">
</section>
<div class="breadcrumb-agile">
	<ol class="breadcrumb mb-0">
		<li class="breadcrumb-item">
        <Link to='/'>Home</Link>
		</li>
		<li class="breadcrumb-item active" aria-current="page">Single page</li>
	</ol>
</div>
    <section class="banner-bottom py-5">
        <div class="container py-md-5">
	<h3 class="heading text-center mb-3 mb-sm-5">Saloon Info</h3>
            <div class="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
                <div class="content-sing-w3ls px-lg-5">
                    <img class="img-fluid" src="assets/images/ban3.jpg" alt="" />
                    <h4>Know About Cool Joe Cuts</h4>
                    <p>Welcome to Cool Joe Cuts Barber Shop, a family-owned and operated business that has been serving the community for over 40 years. Founded by Joe himself, a master barber with decades of experience, our shop has built a reputation for providing top-notch hair care and grooming services for men of all ages.

Our team of skilled barbers and stylists are dedicated to making every customer feel like family. We take the time to listen to your needs and preferences, and use our expertise to create a look that's right for you. Whether you're looking for a classic haircut, a modern style, or a straight razor shave, we've got you covered.
.</p>
                    <p class="mt-3">At Cool Joe Cuts Barber Shop, we believe that a great hair cut is more than just a trim. It's a reflection of who you are and how you want to be seen by the world. That's why we use only the best products and techniques to ensure that every cut is perfect.

.</p>
                    <ul class="w3ls_social_list list-unstyled mt-4">
                        <li class="lead">
                            Catch On Social :
                        </li>
                        <li>
                            <a href="#" class="w3pvt_facebook">
                                <span class="fa fa-facebook-f"></span>
                            </a>
                        </li>
                        <li class="mx-2">
                            <a href="#" class="w3pvt_twitter">
                                <span class="fa fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="w3pvt_dribble">
                                <span class="fa fa-dribbble"></span>
                            </a>
                        </li>
                        <li class="ml-2">
                            <a href="#" class="w3pvt_google">
                                <span class="fa fa-google-plus"></span>
                            </a>
                        </li>
                    </ul>



                </div>
                <div class="row my-lg-5 mt-3 mx-0">
                    <div class="col-lg-6 text-info pl-0">
                        <p>Our shop is designed with a classic barber shop atmosphere, with leather seats, vintage decor and a chill ambiance, we aim to provide a relaxing and enjoyable experience for our customers.

We are open Monday through Sunday but Closed on Saurday, and we also offer online booking for your convenience. Please stop by and see us soon, we can't wait to give you the perfect cut!.</p>
                    </div>
                    <div class="col-lg-6 mt-3 team-img">
                        <div class="row">
                            <div class="col-6">
                                <img src="assets/images/s1.jpg" class="img-fluid" alt="user-image" />
                            </div>
                            <div class="col-6">
                                <img src="assets/images/s2.jpg" class="img-fluid" alt="user-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment-sec-w3ls">
                    <h4 class="leave-w3ls mb-5">3 Comments</h4>
                    <ul class="list-unstyled">
                        <li class="media">
                            <img class="mr-3 img-fluid" src="assets/images/sb1.jpg" alt="" />

                            <div class="media-body">
                                <h5 class="mt-0 mb-1">John Tyler</h5>
                                <p class="mt-3">I recently visited Cool Joe Cuts for the first time and I was extremely impressed. The barber took the time to consult with me on the style and cut I was looking for and executed it perfectly. I also appreciated the attention to detail and the friendly atmosphere of the shop..</p>
                            </div>
                        </li>
                        <li class="media my-5 ml-3">
                            <img class="mr-3 img-fluid" src="assets/images/sb2.jpg" alt="" />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">Jacke Masito</h5>
                                <p class="mt-3">I was impressed by the service at Cool Joe Cuts Barber Shop. The barber was attentive to my needs and gave me a great haircut. I also appreciated the cleanliness and organization of the shop. I will definitely be going back in the future.</p>
                            </div>
                        </li>
                        <li class="media ml-5">
                            <img class="mr-3 img-fluid" src="assets/images/sb3.jpg" alt="" />
                            <div class="media-body">
                                <h5 class="mt-0 mb-1">William James</h5>
                                <p class="mt-3">Cool Joe Cuts is my go-to barber shop. The barbers are always friendly and professional, and they consistently give me a great haircut. The shop is also always clean and well-maintained, which is a nice bonus. I highly recommend it to anyone looking for a new barber.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="comment-bottom w3pvt_mail_grid_right p-0 my-lg-5 my-4">
                    <h4 class="leave-w3ls mb-5">Leave a Reply</h4>
                    <form action="#" class="w3ls-contact-fm" method="post">


                        <div class="form-group">
                            <label>Write Message</label>
                            <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                        </div>
                        <div class="row leave-comment">
                            <div class="col-lg-6 form-group">
                                <label>First Name</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required="" />
                            </div>
                            <div class="col-lg-6 form-group">
                                <label>Email</label>
                                <input class="form-control" type="email" name="Email" placeholder="" required="" />
                            </div>
                        </div>

                        <button type="submit" class="btn read mt-3">Submit</button>
                    </form>
                </div>

            </div>


        </div>
    </section>
    </div>
        )
    }
}
export default Single