import React from 'react';

function Home() {
    return (
        <div>
        <div className="sclub_loader_wrapper">
	<div className="sclub_loader">
		<img src="images/ball.png" alt="sports-club-loader" />
		<span className="sclub_shadow"></span>
	</div>
</div>
	
<div className="sclub_banner_wrapper">
	<div className="sclub_header_wrapper textcenter">
		<div className="container">
			<div className="sclub_header_wrapper_bg">
				<div className="row ">
					<div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
						<div className="sclub_logo content_responsive">
							<a href="index.html">
								<img src="images/logo.png" alt="sports-club-logo" className=" img-responsive center3">
							</a>
						</div>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-7 col-xs-3">
						<nav className="navbar">
							<button type="button" className="navbar-toggle collapsed center3" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<div className="sclub_menu nav navbar-nav">
								<ul>
									<li><a href="index.html">home</a></li>
									<li><a href="about.html">about</a></li>
									<li><a href="#"> Gallery</a>
										<ul className="submenu">
											<li><a href="gallery2column.html">Gallery 2 column</a></li>
											<li><a href="gallery3column.html">Gallery 3 column</a></li>
											<li><a href="gallery4column.html">Gallery 4 column</a></li>
										</ul>
									</li>
									<li><a href="activities.html">Activities</a></li>
									<li><a href="#">blog</a>
										<ul className="submenu">
											<li><a href="blog2column.html">blog 2 column</a></li>
											<li><a href="blog3column.html">blog 3 column</a></li>
											
											<li><a href="blog_with_right_sidebar.html">blog with right sidebar</a></li>
											<li><a href="blog_with_left_sidebar.html">blog with left sidebar</a></li>
											<li><a href="blog_single.html">blog detail</a></li>
										</ul>
									</li>
									<li><a href="team.html">Team & Players</a></li>
									<li><a href="enquiry.html">Enquiry</a></li>
								</ul>
								</div>
							</div>
						</nav>
					</div>
					<div className="col-lg-1 col-md-1 col-sm-2 col-xs-3">
						<div className="search_header">
							<a href="#" data-toggle="modal" data-target="#modal_popup"><i className="fa fa-search" aria-hidden="true"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="sclub_main_slider">
		<div className="sclub_slide">
			<div className="sclub_slide_content">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div id="wrapper_men">
								<div className="men"></div>
							</div>
							<div className="bnr_heading1">
								<h4>Look . Feel . Live</h4>
								<h1 className="heading1"><span>Sports</span></h1>
								<p className="heading1">Club</p>
							</div>
							<div className="line_color">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="modal_popup" className="modal fade search_header" role="dialog">
	<div className="modal-dialog">
		<div className="modal-content">
			<div className="modal-header">
				<button type="button" className="close" data-dismiss="modal">&times;</button>
			</div>
			<div className="modal-body">
				<input className="form-control" type="search" placeholder="Search here...">
				<a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
			</div>
		</div>
	</div>
</div>

<div className="container">
	<div className="sclub_sports_wrapper">
		<div className="row">
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_b_15">
					<div className="sports_image sports_hover">
						<img src="images/s1.jpg" alt="sports-club-cycling" className="img-responsive center">
						<div className="sport_overlay">
						<p className="subheading"><a href="sport_single.html">cycling</a></p>
							<div className="sports_icon">
								<a href="sport_single.html"><img src="images/s1.png" alt="sports-club-cycling"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_b_15">
					<div className="sports_image sports_hover">
						<img src="images/s2.jpg" alt="sports-club-basketball" className="img-responsive center">
						<div className="sport_overlay">
						<p className=" subheading"><a href="sport_single.html">basketball</a></p>
							<div className="sports_icon">
								<a href="sport_single.html"><img src="images/s2.png" alt="sports-club-basketball-hover"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_b_15">
					<div className="sports_image sports_hover">
						<img src="images/s3.jpg" alt="sports-club-tennies" className="img-responsive center">
						<div className="sport_overlay">
						<p className="subheading"><a href="sport_single.html">tennies</a></p>
							<div className="sports_icon">
								<a href="sport_single.html"><img src="images/s3.png" alt="sports-club-tennies-hover"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_b_15">
					<div className="sports_image sports_hover">
						<img src="images/s4.jpg" alt="sports-club-swimming-hover" className="img-responsive center">
						<div className="sport_overlay">
						<p className="subheading"><a href="sport_single.html">swimming</a></p>
							<div className="sports_icon">
								<a href="sport_single.html"><img src="images/s4.png" alt="sports-club-swimming"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_t_15">
					<div className="sports_image sports_hover">
						<img src="images/s5.jpg" alt="sports-club-hockey-hover" className="img-responsive center">
						<div className="sport_overlay">
						<p className="subheading"><a href="sport_single.html">hockey</a></p>
							<div className="sports_icon">
								<a href="sport_single.html"><img src="images/player.png" alt="sports-club-hockey"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_t_15">
					<div className="sports_image sports_hover">
						<img src="images/s6.jpg" alt="sports-club-golf-hover" className="img-responsive center">
						<div className="sport_overlay">
						<p className="subheading"><a href="sport_single.html">golf</a></p>
							<div className="sports_icon">
								<a href="sport_single.html"><img src="images/s6.png" alt="sports-club-golf"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_t_15">
					<div className="sports_image sports_hover">
						<img src="images/s7.jpg" alt="sports-club-boxing-hover-img" className="img-responsive center">
						<div className="sport_overlay">
						<p className="subheading"><a href="sport_single.html">boxing</a></p>
							<div className="sports_icon">
								<img src="images/s7.png" alt="sports-club-boxing">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm-3 col-xs-6">
				<div className="sport_div text-center m_t_15">
					<div className="sports_image sports_hover">
						<img src="images/s8.jpg" alt="sports-club-badminton-hover" className="img-responsive center">
						<div className="sport_overlay">
						<p className="subheading"><a href="sport_single.html">badminton</a></p>
							<div className="sports_icon">
								<a href="sport_single.html"><img src="images/s8.png" alt="sports-club-badminton"></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="latest_result">
	<div className="container">
		<div className="row">
			<div className="text-center">
				<h1 className="heading">Latest Result</h1>
			</div>
			<div className="padder_bottom bottompadder50 text-center">
				<img src="images/heading_line.png" width="114" height="20" alt="sports-club-heading-line" >
			</div>
			<div className="col-sm-5">
				<div className="latest_result_sec1">
					<div className="latest_result_sec1_content">
						<img src="images/team01.png" alt="sports-club-team01" className="img-responsive">
					</div>
				</div>
				<div className="team_name_result1">
					<h3>Soccer Champions<span> Since 1975</span></h3>
				</div>
			</div>
			<div className="col-sm-2">
				<div className="latest_result_sec2 text-center">
					<h1>V/S</h1>
					<p>Bayern 2 x 1 Borussia Dortmund - Champions League Final 2019</p>
					<h2>3-2</h2>
				</div>
			</div>
			<div className="col-sm-5">
				<div className="latest_result_sec3">
					<div className="latest_result_sec1_content">
						<img src="images/team02.png" alt="sports-club-team02" className="img-responsive">
					</div>
				</div>
				<div className="team_name_result2">
					<h3>Three Star Club<span> Since 1980</span></h3>
				</div>
			</div>
		</div>
	</div>	
</div>

<div className="sclub_traning_wrapper">
	<div className="container">
		<div className="row">
			<div className="text-center">
				<h1 className="heading">training package</h1>
			</div>
			<div className="padder_bottom bottompadder50 text-center">
				<img src="images/heading_line.png" width="114" height="20" alt="sports-club-heading-line" >
			</div>
			
			<div className="col-lg-4 col-md-4 col-sm-6">
				<div className="traning_div text-left  ">
					<div className="sports_hover training_img">
						<img src="images/t1.jpg" alt="sports-club-training1" className=" img-responsive">
						<div className="sport_overlay">
							<div className="sports_icon">
								<a href="images/t1.jpg" className="image-link">
									<i className="fa fa-eye" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="bottompadder10 dollar_bg">
					<p><span className="paragraph">$ 30</span></p>
						<h2 className="subheading">Ice Skating Practice</h2>
					</div>
					<div className="bottompadder10">
						<p className="paragraph">Ipsum dolor sit amet,consectetur massa quam dapibus adipiscing elit. Mauris eleifend, massa quam dapibus leo.</p>
					</div>
					<ul>
						<li>
							<p className="left paragraph"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 months</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-6">
				<div className="traning_div text-left">
					<div className="sports_hover training_img">
						<img src="images/t2.jpg" alt="sports-club-training2" className=" img-responsive">
						<div className="sport_overlay">
							<div className="sports_icon">
								<a href="images/t2.jpg" className="image-link">
									<i className="fa fa-eye" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>
					<div className=" bottompadder10 dollar_bg">
					<p><span className="paragraph">$ 30</span></p>
						<h2 className=" subheading">Football Coach</h2>
					</div>
					<div className=" bottompadder10">
						<p className=" paragraph">Ipsum dolor sit amet,consectetur massa quam dapibus adipiscing elit. Mauris eleifend, massa quam dapibus leo.</p>
					</div>
					<ul>
						<li>
							<p className="left paragraph"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 months</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-6">
				<div className="traning_div text-left">
					<div className="sports_hover training_img">
						<img src="images/t3.jpg" alt="sports-club-training3" className=" img-responsive">
						<div className="sport_overlay">
							<div className="sports_icon">
								<a href="images/t3.jpg" className="image-link">
									<i className="fa fa-eye" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="bottompadder10 dollar_bg">
					<p><span className="paragraph">$ 30</span></p>
						<h2 className="subheading">Boxing Trainer</h2>
					</div>
					<div className=" bottompadder10">
						<p className="paragraph">Ipsum dolor sit amet,consectetur massa quam dapibus adipiscing elit. Mauris eleifend, massa quam dapibus leo.</p>
					</div>
					<ul>
						<li>
							<p className="left paragraph"><i className="fa fa-clock-o" aria-hidden="true"></i> 3 months</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="latest_result upcoming_matches">
	<div className="container">
		<div className="row">
			<div className="text-center">
				<h1 className="heading">Upcoming Matches</h1>
			</div>
			<div className="padder_bottom bottompadder50 text-center">
				<img src="images/heading_line.png" width="114" height="20" alt="sports-club-heading-line" >
			</div>
			<div className="col-md-6">
				<div className="counter_bg">
					<div className="col-md-4">
						<div className="latest_result_sec1">
							<div className="latest_result_sec1_content">
								<img src="images/team01.png" alt="sports-club-team01" className="img-responsive">
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="latest_result_sec2 text-center">
							<h1>V/S</h1>
							<p>Borussia Dortmund Champions League Final 2019</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="latest_result_sec3">
							<div className="latest_result_sec1_content">
								<img src="images/team02.png" alt="sports-club-team02" className="img-responsive">
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="counter">
						  <ul>
							<li><span id="days"></span>days</li>
							<li><span id="hours"></span>Hours</li>
							<li><span id="minutes"></span>Minutes</li>
							<li><span id="seconds"></span>Seconds</li>
						  </ul>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="upcoming_list">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<table className="table swiper-slide">
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">Soccer</a></td>
									<td><img src="images/team02.png" alt="sports-club-team02" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team01.png" alt="sports-club-team01" className="img-responsive"></td>
									<td><a href="#">Star Club</a></td>
								</tr>
								<tr>
									<td>10 March 2019</td>
									<td><a href="#">Spain</a></td>
									<td><img src="images/team03.png" alt="sports-club-team03" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team04.png" alt="sports-club-team04" className="img-responsive"></td>
									<td><a href="#">German</a></td>
								</tr>
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">USA</a></td>
									<td><img src="images/team05.png" alt="sports-club-team05" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team06.png" alt="sports-club-team06" className="img-responsive"></td>
									<td><a href="#">Argentina</a></td>
								</tr>
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">Argentina</a></td>
									<td><img src="images/team06.png" alt="sports-club-team06" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team04.png" alt="sports-club-team04" className="img-responsive"></td>
									<td><a href="#">German</a></td>
								</tr>
								<tr>
									<td>10 March 2019</td>
									<td><a href="#">Spain</a></td>
									<td><img src="images/team03.png" alt="sports-club-team03" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team05.png" alt="sports-club-team05" className="img-responsive"></td>
									<td><a href="#">USA</a></td>
								</tr>
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">German</a></td>
									<td><img src="images/team04.png" alt="sports-club-team04" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team02.png" alt="sports-club-team02" className="img-responsive"></td>
									<td><a href="#">Soccer</a></td>
								</tr>
								<tr>
									<td>21 April 2019</td>
									<td><a href="#">Star Club</a></td>
									<td><img src="images/team01.png" alt="sports-club-team01" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team05.png" alt="sports-club-team05" className="img-responsive"></td>
									<td><a href="#">USA</a></td>
								</tr>
							</table>
							<table className="table swiper-slide">
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">Soccer</a></td>
									<td><img src="images/team02.png" alt="sports-club-team02" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team01.png" alt="sports-club-team01" className="img-responsive"></td>
									<td><a href="#">Star Club</a></td>
								</tr>
								<tr>
									<td>10 March 2019</td>
									<td><a href="#">Spain</a></td>
									<td><img src="images/team03.png" alt="sports-club-team03" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team04.png" alt="sports-club-team04" className="img-responsive"></td>
									<td><a href="#">German</a></td>
								</tr>
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">USA</a></td>
									<td><img src="images/team05.png" alt="sports-club-team05" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team06.png" alt="sports-club-team06" className="img-responsive"></td>
									<td><a href="#">Argentina</a></td>
								</tr>
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">Argentina</a></td>
									<td><img src="images/team06.png" alt="sports-club-team06" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team04.png" alt="sports-club-team04" className="img-responsive"></td>
									<td><a href="#">German</a></td>
								</tr>
								<tr>
									<td>10 March 2019</td>
									<td><a href="#">Spain</a></td>
									<td><img src="images/team03.png" alt="sports-club-team03" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team05.png" alt="sports-club-team05" className="img-responsive"></td>
									<td><a href="#">USA</a></td>
								</tr>
								<tr>
									<td>15 February 2019</td>
									<td><a href="#">German</a></td>
									<td><img src="images/team04.png" alt="sports-club-team04" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team02.png" alt="sports-club-team02" className="img-responsive"></td>
									<td><a href="#">Soccer</a></td>
								</tr>
								<tr>
									<td>21 April 2019</td>
									<td><a href="#">Star Club</a></td>
									<td><img src="images/team01.png" alt="sports-club-team01" className="img-responsive"></td>
									<td>vs</td>
									<td><img src="images/team05.png" alt="sports-club-team05" className="img-responsive"></td>
									<td><a href="#">USA</a></td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</div>

<div className=" sclub_gallery_wrapper text-center">
	<div className="container">
		<div className="row">
			<div className="text-center">
				<h1 className="heading">Our Gallery</h1>
			</div>
			<div className="padder_bottom bottompadder50 text-center">
				<img src="images/heading_line.png" width="114" height="20" alt="sports-club-heading-line" >
			</div>
			
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
				<div className="sports_hover gallery_div">
					<img src="images/g1.jpg" alt="sports-club-gallery1" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single1.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="sports_hover gallery_div">
					<img src="images/g6.jpg" alt="sports-club-gallery6" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single6.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="sports_hover gallery_div">
					<img src="images/g3.jpg" alt="sports-club-gallery3" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single3.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
				<div className="sports_hover gallery_div">
					<img src="images/g8.jpg" alt="sports-club-gallery8" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single8.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="sports_hover gallery_div">
					<img src="images/g2.jpg" alt="sports-club-gallery2" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single2.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="sports_hover gallery_div">
					<img src="images/g4.jpg" alt="sports-club-gallery4" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single4.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
				<div className="sports_hover gallery_div">
					<img src="images/g9.jpg" alt="sports-club-gallery9" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single9.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="sports_hover gallery_div">
					<img src="images/g5.jpg" alt="sports-club-gallery5" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single5.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="sports_hover gallery_div">
					<img src="images/g7.jpg" alt="sports-club-gallery7" className=" img-responsive center">
					<div className="sport_overlay">
						<div className="sports_icon">
							<a href="images/g_single7.jpg" className="gallery_img">
								<i className="fa fa-eye" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="sclub_timer_wrapper">
	<div className="container">
		<div className="row ">
			<div className="text-center">
				<h1 className="heading">Our Achievements</h1>
			</div>
			<div className="padder_bottom bottompadder50 text-center">
				<img src="images/heading_line.png" width="114" height="20" alt="sports-club-heading-line" >
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
				<div className="row ">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
						<div className="timer_div text-center m_b_15 ">
							<img src="images/player.png" width="40" height="40" alt="sports-club-played-games" >
							<h1 className="timer heading" data-from="0" data-to="500" data-speed="5000" data-refresh-interval="50">500</h1>
							<p className=" paragraph">Played Games</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
						<div className="timer_div text-center m_b_15 ">
							<img src="images/t2.png" width="40" height="40" alt="sports-club-teams" >
							<h1 className="timer heading" data-from="0" data-to="1000" data-speed="5000" data-refresh-interval="50">1000</h1>
							<p className=" paragraph">teams</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
						<div className="timer_div text-center m_t_15 ">
							<img src="images/t3.png" width="40" height="40" alt="sports-club-tournaments" >
							<h1 className="timer heading" data-from="0" data-to="300" data-speed="5000" data-refresh-interval="50">300</h1>
							<p className="paragraph">tournaments</p>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
						<div className="timer_div text-center m_t_15 ">
							<img src="images/t4.png" width="40" height="40" alt="sports-club-trophy" >
							<h1 className="timer heading" data-from="0" data-to="600" data-speed="5000" data-refresh-interval="50">600</h1>
							<p className="paragraph">Winning Trophy</p>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
				<div className="timer_div_video">
					<img src="images/counter_img.jpg" alt="sports-club-achievements" className="img-responsive">
					<a href="https://www.youtube.com/embed/hNQFjqDvPhA" className="popup-youtube">
						<svg version="1.1" id="Capa_1" className="play_button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 294.843 294.843">
						<g>
							<path d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392
								c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421
								S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421
								s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z"/>
							<path d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883
								l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333
								c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029
								C113.877,77.926,111.575,77.902,109.699,78.969z"/>
						</g>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="sclub_staff_wrapper textcenter">
	<div className="container">
		<div className="row">
			<div className="text-center">
				<h1 className="heading">Our Team</h1>
			</div>
			<div className="padder_bottom bottompadder50 text-center">
				<img src="images/heading_line.png" width="114" height="20" alt="sports-club-heading-line" >
			</div>
			
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="staff_div bottompadder10 text-center">
					<div className="sports_hover">
						<img src="images/staff1.jpg" alt="sports-club-staff1" className=" img-responsive center">
						<div className="sport_overlay"></div>
					</div>
					<div className="">
						<h2 className="subheading"><a href="#">mike</a></h2>
					</div>
					<p className="paragraph">gym trainer</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="staff_div bottompadder10  text-center">
					<div className="sports_hover">
						<img src="images/staff2.jpg" alt="sports-club-staff2" className=" img-responsive center">
						<div className="sport_overlay"></div>
					</div>
					<div className="">
						<h2 className="subheading"><a href="#">linda</a></h2>
					</div>
					<p className="paragraph">support staff</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="staff_div bottompadder10 text-center">
					<div className="sports_hover">
						<img src="images/staff3.jpg" alt="sports-club-staff3" className=" img-responsive center">
						<div className="sport_overlay"></div>
					</div>
					<div className=" ">
						<h2 className="subheading"><a href="#">roman</a></h2>
					</div>
					<p className="paragraph">Swimming Coach</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="staff_div bottompadder10 text-center">
					<div className="sports_hover">
						<img src="images/staff4.jpg" alt="sports-club-staff4" className=" img-responsive center">
						<div className="sport_overlay"></div>
					</div>
					<div className=" ">
						<h2 className="subheading"><a href="#">joni</a></h2>
					</div>
					<p className="paragraph">Football Coach</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="sclub_footer_wrapper">
	<div className="container">
		<div className="row ">
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
				<div className="footer_div foot_logo">
					<div>
						<img src="images/logo.png" alt="sports-club-logo" className=" img-responsive">
					</div>
					<div className="">
						<p>2861 Coffman Alley Bowling 42101,Brownwood USA</p>
						<p>(+33)325-641-8980 <a href="mailto:651ttnn@payspun.com">651ttnn0n5w@payspun.com</a></p>
						<ul className="social_icon">
							<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>	
							<li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
						</ul>
					</div>
				</div>  
			</div> 
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
				<div className="footer_div footer_sec2">
					<h1>Useful Links</h1>
					<ul className="">
						<li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Offers</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Membership</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Resources</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Todays Offer</a></li>
						<li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Connected Peoples</a></li>
					</ul>
				</div>
			</div> 
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
				<div className="footer_div footer_sec3">
					<h1>Latest News</h1>
					<p>January 25,2019</p>
					<a href="#">Dolor sit amet,consectetur adipiscing elit. Mauris eleifend.</a>
					<p>January 25,2019</p>
					<a href="#">Dolor sit amet,consectetur adipiscing elit. Mauris eleifend.</a>
				</div>
			</div>
			<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
				<div className="footer_div foot_insta">
					<h1>Instagram Posts</h1>
					<ul>
						<li>
							<a href="#"><img src="images/fg1.jpg" className="img-responsive" alt="sports-club-instagram1"></a>
						</li>
						<li>
							<a href="#"><img src="images/fg2.jpg" className="img-responsive" alt="sports-club-instagram2"></a>
						</li>
						<li>
							<a href="#"><img src="images/fg3.jpg" className="img-responsive" alt="sports-club-instagram3"></a>
						</li>
						<li>
							<a href="#"><img src="images/fg4.jpg" className="img-responsive" alt="sports-club-instagram4"></a>
						</li>
						<li>
							<a href="#"><img src="images/fg5.jpg" className="img-responsive" alt="sports-club-instagram5"></a>
						</li>
						<li>
							<a href="#"><img src="images/fg6.jpg" className="img-responsive" alt="sports-club-instagram6"></a>
						</li>
					</ul>
				</div>
			</div> 
		</div>
	</div>
</div>

<div className="sclub_copyright_wrapper">
	<div className="container">
		<div className="row">
			<div className="col-md-6">
				<p className="paragraph">Copyright &copy; 2019, All Rights Reserved</p>
			</div>
			<div className="col-md-6">
				<ul className="policy_term">
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Terms</a></li>
					<li><a href="#">Sitemap</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<a href="#" id="back-to-top" title="Back to top"><img src="images/ball.png" alt="sports-club-ball"></a>
       
	
	
          </div>
	
        </div>
    )
}

export default Home;
