<?php include_once "layout/head.php" ?>
<div id="app">
    <?php include_once "layout/navbar.php" ?>
    <?php include_once "layout/aside.php" ?>
    <?php include_once "components/hero.php" ?>



    <section class="section is-main-section">
    <div class="container mt-5">
    <div class="row">
        <div class="col">
        <div class="card">
            <div class="mb-3 p-3 table-responsive">
            <table class="table" id="solicitud_tramites">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Options</th>
                            <th>Correct</th>
                            <th>Controls</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Question</th>
                            <th>Options</th>
                            <th>Correct</th>
                            <th>Controls</th>
                        </tr>
                    </tfoot>
            </table>
            </div>
        </div>
        </div>
    </div>
</div>

    </section>


    <?php include_once "layout/footer.php" ?>
</div>