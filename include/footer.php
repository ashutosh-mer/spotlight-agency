<!-- FooterSec Start -->
<footer class="footer-wrap" data-scroll-section>
    <div class="container-fluid">
        <div class="content">
            <div class="inner">
                <div class="left">
                    <div class="logo">
                        <a href="#" class="d-inline-block">
                            <img src="assets/images/footer-logo.svg" alt="footer-logo">
                        </a>
                    </div>
                </div>
                <div class="center">
                    <div class="links">
                        <ul class="footer-links">
                            <li>
                                <a href="#">
                                    Services
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Clients
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Careers
                                </a>
                            </li>


                            <li>
                                <a href="#">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <div class="btn-wrap">
                            <a href="#" class="btn btn-primary">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="links">
                        <ul class="social-links">
                            <li>
                                <a href="#">Linkedin</a>
                            </li>

                            <li>
                                <a href="#">Instagram</a>
                            </li>

                            <li>
                                <a href="#">x.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="copyright">
            <ul class="cp-links">
                <li>
                    <a href="#">
                        © 2024 Spotlight
                    </a>
                </li>

                <li>
                    <a href="#">
                        Terms
                    </a>
                </li>

                <li>
                    <a href="#">
                        Privacy
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>

<!-- FooterSec End -->
<!-- JS File -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/slick.min.js"></script>
<script src="assets/js/isotope.pkgd.min.js"></script>
<script src="assets/js/locomotive-scroll.min.js"></script>
<!-- load barba (UMD version) -->
<script src="https://unpkg.com/@barba/core"></script>

<!-- load gsap animation library (minified version) -->
<script src="https://unpkg.com/gsap@latest/dist/gsap.min.js"></script>
<script type="text/javascript">
function pagetransition() {
    var tl = gsap.timeline();
    tl.to("#trans", {
        duration: .5,
        scaleY: 1,
        transformOrigin: 'bottom',
        ease: Power3.easeInOut
    });
    tl.to(".left", {
        x: -200,
        y: 0,
        duration: 1,
        ease: Power3.easeInOut,
        opacity: 0
    });
    tl.to("#trans", {
        duration: .5,
        scaleY: 0,
        transformOrigin: 'top',
        ease: Power3.easeInOut,
        delay: 0
    })

}

//Function to Delay
function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n)
    })


}

//Initial Content ANimation
function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".left", {
        x: -200,
        y: 0,
        duration: 1,
        ease: Power3.easeInOut,
        opacity: 0
    });

}


//Here where magic Happens
barba.init({
    //we need sync
    sync: true,
    //the transitions array
    transitions: [{
        //When the user leaves the page
        async leave(data) {
            const done = this.async();
            //call page transition function
            pagetransition();
            //give a small delay
            await delay(500);
            done();
        }
    }],


});
//windows loads, call content animation
window.onload = () => {
    contentAnimation();
}
// barba.init({
//     transitions: [{
//         name: 'opacity-transition',
//         leave(data) {
//             return gsap.to(data.current.container, {
//                 opacity: 0
//             });
//         },
//         enter(data) {
//             return gsap.from(data.next.container, {
//                 opacity: 0
//             });
//         }
//     }]
// });
</script>
<!-- Custom JS File -->
<script src="assets/js/setting.js"></script>