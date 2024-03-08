<!doctype html>
<html>

<head>
    <?php include("include/head.php"); ?>
</head>

<body data-barba="wrapper">
    <div id="trans">
        <div class="img-box loadText">
            <img src="assets/images/logo.svg" alt="logo" class="svg">
        </div>
    </div>

    <?php include("include/header.php"); ?>

    <div data-scroll-container data-barba="container" data-barba-namespace="page-contact">

        <div class="contact-us-wrap">
            <div class="container">
                <div class="content text-center">
                    <h1 class="display-1 title">We're all ears</h1>
                </div>

                <div class="contact-form-wrap">
                    <form>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label class="form-label">My name is</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label class="form-label">I work with</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label class="form-label">You can reach me at</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label class="form-label">Optionally, I am sharing more</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="btn-wrap">
                                    <button type="submit" class="btn btn-primary w-100">Send</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <?php include("include/footer.php"); ?>
    </div>
</body>

</html>