angular.module('app')
    .controller('wishCtrl', function ($scope, $state) {



        $scope.data = [{
            bi_photo: "./img/photo.png",
            bi_title: "bi_title",
            bi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!"
        }, {
            bi_photo: "./img/photo.png",
            bi_title: "bi_title2",
            bi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!"
        },
            {
                bi_photo: "./img/photo.png",
                bi_title: "bi_title3",
                bi_desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis consequuntur dolorem dolores dolorum ducimus, et eum exercitationem hic, iusto laboriosam molestias obcaecati porro possimus quaerat quia quisquam temporibus unde!"
            }];

        $scope.user = {
            bi_count: 2,
            bi_array: []
        };

        $scope.counter = 0;

        $scope.add = function () {
            console.log('add');
            
            next();
        };

        $scope.skip = function () {
            console.log('skip');
            next();
        };

        function next() {
            $scope.counter += 1;
            if ($scope.counter == $scope.data.length) {
                $scope.counter = 0;
            }
        }




    });