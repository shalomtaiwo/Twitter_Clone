var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var twitterApp = /** @class */ (function () {
    function twitterApp() {
        this.twitter = JSON.parse(localStorage.getItem("tweets") || '[]');
    }
    twitterApp.prototype.addNewTweet = function (postId, postText, postImage, postLike, postComment, postShare) {
        this.newTweet = {
            postId: postId,
            postText: postText,
            postImage: postImage,
            postLike: postLike,
            postComment: postComment,
            postShare: postShare
        };
        this.twitter.push(this.newTweet);
    };
    return twitterApp;
}());
var tweetPost = /** @class */ (function (_super) {
    __extends(tweetPost, _super);
    function tweetPost() {
        return _super.call(this) || this;
    }
    tweetPost.prototype.getPostId = function () {
        // I couldn't get how to use Cuid/Uuid with typeScript so I generated random postIds instead
        return 'post' + Math.random().toString(36).substring(2, 12);
    };
    tweetPost.prototype.closeLightBoxId = function () {
        // I couldn't get how to use Cuid/Uuid with typeScript so I generated random postIds instead
        return 'close' + Math.random().toString(36).substring(2, 12);
    };
    return tweetPost;
}(twitterApp));
var eventListeners = /** @class */ (function (_super) {
    __extends(eventListeners, _super);
    function eventListeners() {
        var _this = _super.call(this) || this;
        _this.textPost = document.querySelector("#textPost");
        _this.tweetImage = document.querySelector('.imgUrl');
        _this.tweetPosts = document.querySelector('.latest_posts');
        _this.tweetButton = document.querySelector('.tweet_new');
        _this.returnButton = document.querySelector('.return-to');
        _this.tweetMobile = document.querySelector('.mobile-tweet-icon');
        _this.textOnlyTweet();
        _this.htmlTweet();
        _this.imageEvent();
        _this.submitEvent();
        return _this;
    }
    eventListeners.prototype.textOnlyTweet = function () {
        var myDate = new Date;
        this.imgInput = document.querySelector('#imgUrl');
        this.tweetPosts.innerHTML = this.twitter.map(function (newTweet) { return "\n                        <div class=\"latest_tweet\">\n                            <div class=\"post_tweet_user\">\n                            <img src=\"https://pbs.twimg.com/profile_images/1485519634086432775/0cwAi0u1_normal.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"latest_post_content\">\n                                <div class=\"user_details\">\n                                    <div class=\"user_post_header\">\n                                    <span>Shalom Taiwo </span>\n                                    <span class=\"other_name\">@taiwo_shalom</span>\n                                    <span class=\"other_name\"> <b>\u00B7</b> <span>".concat(myDate.getHours(), "h</span></span>\n                                    </div>\n                                    <div class=\"post_more\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><g><circle cx=\"5\" cy=\"12\" r=\"2\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle><circle cx=\"19\" cy=\"12\" r=\"2\"></circle></g></svg>\n                                    </div>\n                                </div>\n                                <div class=\"post_content\">\n                                    <p>").concat(newTweet.postText, "</p>\n                                </div>\n                                <div class=\"post_reaction\">\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z\"></path></g></svg>\n                                        <p class=\"tweetComments\"></p>\n                                    </div>\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z\"></path></g></svg>\n                                        <p class=\"reTweet\"></p>\n                                    </div>\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z\"></path></g></svg>\n                                        <p class=\"tweetLovePost\"></p>\n                                    </div>\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z\"></path><path d=\"M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z\"></path></g></svg>\n                                        <p class=\"tweetSharePost\"></p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        </div>"); }).reverse().join();
    };
    eventListeners.prototype.htmlTweet = function () {
        var myDate = new Date;
        // Show New Post
        this.imgInput = document.querySelector('#imgUrl');
        this.tweetPosts.innerHTML = this.twitter.map(function (newTweet) { return "\n                    \n                <div class=\"latest_tweet\">\n                            <div class=\"post_tweet_user\">\n                            <img src=\"https://pbs.twimg.com/profile_images/1485519634086432775/0cwAi0u1_normal.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"latest_post_content\">\n                            \n                                <div class=\"user_details\">\n                                    <div class=\"user_post_header\">\n                                    <span>Shalom Taiwo </span>\n                                    <span class=\"other_name\">@taiwo_shalom</span>\n                                    <span class=\"other_name\"> <b>\u00B7</b> <span>".concat(myDate.getHours(), "h</span></span>\n                                    </div>\n                                    <div class=\"post_more\">\n                                \n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><g><circle cx=\"5\" cy=\"12\" r=\"2\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle><circle cx=\"19\" cy=\"12\" r=\"2\"></circle></g></svg>\n                                    </div>\n                                </div>\n                                <div class=\"post_content\">\n                                    <p>").concat(newTweet.postText, "</p>\n                                    <div class=\"post_image\">\n                                    <img class=\"getImageLightBox\" id=\"").concat(newTweet.postId, "\" src=\"").concat(newTweet.postImage, "\"/>\n                                </div>\n                                </div>\n                                <div class=\"post_reaction\">\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z\"></path></g></svg>\n                                        <p class=\"tweetComments\"></p>\n                                    </div>\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z\"></path></g></svg>\n                                        <p class=\"reTweet\"></p>\n                                    </div>\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z\"></path></g></svg>\n                                        <p class=\"tweetLovePost\"></p>\n                                    </div>\n                                    <div class=\"reaction\">\n                                        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" ><g><path d=\"M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z\"></path><path d=\"M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z\"></path></g></svg>\n                                        <p class=\"tweetSharePost\"></p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        </div>\n                        "); }).reverse().join('');
    };
    eventListeners.prototype.imageEvent = function () {
        var _this = this;
        // Convert to DataURL after Choosing image
        this.tweetImage.addEventListener('change', function (e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onloadend = function () {
                _this.imageData = reader.result;
            };
            reader.readAsDataURL(file);
        });
    };
    eventListeners.prototype.submitEvent = function () {
        var _this = this;
        this.mobilePopup = document.querySelector('.mobile-popup');
        var mainBody = document.querySelector('main');
        document.addEventListener("submit", function (e) {
            e.preventDefault();
            while (!_this.tweetImage.value) {
                if (_this.textPost.value == '') {
                    _this.textPost.setAttribute('required', '');
                }
                else {
                    _this.addNewTweet(_this.getPostId(), _this.textPost.value, '', '', '', '');
                    _this.textOnlyTweet();
                    _this.htmlTweet();
                    _this.textPost.value = '';
                    _this.tweetImage.value = '';
                    _this.mobilePopup.style.display = 'none';
                }
                break;
            }
            while (_this.tweetImage.value != '') {
                if (_this.textPost.value == '') {
                    _this.textPost.setAttribute('required', '');
                }
                else {
                    _this.addNewTweet(_this.getPostId(), _this.textPost.value, _this.imageData, '', '', '');
                    _this.htmlTweet();
                    _this.textPost.value = '';
                    _this.tweetImage.value = '';
                    _this.mobilePopup.style.display = 'none';
                }
                break;
            }
            localStorage.setItem("tweets", JSON.stringify(_this.twitter));
        });
        this.returnButton.addEventListener('click', function (e) {
            _this.mobilePopup.style.display = 'none';
            mainBody.style.overflow = 'scroll';
        });
        this.tweetMobile.addEventListener('click', function (e) {
            _this.mobilePopup.style.display = 'block';
            mainBody.style.overflow = 'hidden';
        });
    };
    return eventListeners;
}(tweetPost));
var eventNew = new eventListeners;
//# sourceMappingURL=script.js.map