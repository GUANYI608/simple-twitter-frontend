(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29627170"],{"06b1":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("SideBar",{on:{"after-post-tweet":e.afterPostTweet}}),r("div",{staticClass:"user-wrapper"},[r("UserProfile",{attrs:{"initial-user":e.user}}),r("div",{staticClass:"item-list"},[r("router-link",{staticClass:"item-link",attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("button",{staticClass:"item"},[e._v("推文")])]),r("router-link",{staticClass:"item-link",attrs:{to:{name:"user-reply",params:{id:e.user.id}}}},[r("button",{staticClass:"item"},[e._v("推文與回覆")])]),r("router-link",{staticClass:"item-link",attrs:{to:"#"}},[r("button",{staticClass:"item item-current"},[e._v("喜歡的內容")])])],1),e._l(e.tweets,(function(e){return r("Tweets",{key:e.id,attrs:{"initial-tweet":e}})}))],2),r("OtherUsers",{on:{"after-follow-action":e.afterFollowAction}})],1)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("d81d"),r("a4d3"),r("e01a"),r("7c08")),c=r("b112"),u=r("9f73"),l=r("c136"),d=r("1602"),f=r("2fa3"),w=r("2f62"),p={name:"UserSelf",components:{SideBar:o["a"],OtherUsers:c["a"],UserProfile:u["a"],Tweets:l["a"]},data:function(){return{user:{id:-1,account:"",name:"",cover:"",avatar:"",introduction:"",tweetCount:-1,followingCount:-1,followerCOunt:-1},tweets:[]}},computed:Object(i["a"])({},Object(w["b"])(["currentUser"])),created:function(){var e=this.$route.params.id;this.fetchUser(e),this.fetchUserLikedTweets(e)},beforeRouteUpdate:function(e,t,r){var a=e.params.id;this.fetchUser(a),this.fetchUserLikedTweets(a),r()},methods:{fetchUser:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,l,w,p,h,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].getUser({userId:e});case 3:a=r.sent,n=a.data,s=n.id,i=n.account,o=n.name,c=n.cover,u=n.avatar,l=n.introduction,w=n.tweetCount,p=n.followingCount,h=n.followerCount,m=n.isFollowing,t.user={id:s,account:i,name:o,cover:c,avatar:u,introduction:l,tweetCount:w,followingCount:p,followerCount:h,isFollowing:m},r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),console.error(r.t0),f["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()},fetchUserLikedTweets:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].getUserLikes({userId:e});case 3:a=r.sent,n=a.data,t.tweets=n.map((function(e){return{id:e.TweetId,userId:e.userId,account:e.userAccount,name:e.userName,avatar:e.userAvatar,description:e.description,createdAt:e.createdAt,replyCount:e.replyCount,likeCount:e.likeCount,isLiked:e.isLiked}})),r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0),f["a"].fire({icon:"error",title:"無法取得推文，請稍後再試"});case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()},afterPostTweet:function(){var e=this.$route.params.id;this.fetchUser(e),this.fetchUserLikedTweets(e)},afterFollowAction:function(){var e=this.$route.params.id;this.fetchUser(e)}}},h=p,m=(r("e1fc"),r("2877")),v=Object(m["a"])(h,a,n,!1,null,"122a357d",null);t["default"]=v.exports},"41bb":function(e,t,r){},e1fc:function(e,t,r){"use strict";r("41bb")}}]);
//# sourceMappingURL=chunk-29627170.12b498cc.js.map