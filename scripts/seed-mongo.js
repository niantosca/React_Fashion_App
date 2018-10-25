const db = require("../models");

const objects = [
    {
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/19/16/enhanced/webdr13/enhanced-9349-1453240692-1.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        category: "mensbig",
        title: "big guy 1"
    },
    {
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/19/17/enhanced/webdr09/enhanced-10994-1453241408-9.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        category: "mensbig",
        title: "big guy 2"
    },
    {
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/19/16/enhanced/webdr06/enhanced-21775-1453239529-7.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        category: "mensbig",
        title: "big guy 3"
    },
    {
        imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/19/17/enhanced/webdr03/original-28775-1453242157-10.jpg?downsize=800:*&output-format=auto&output-quality=auto",
        category: "mensbig",
        title: "big guy 4"
    },
    {
        imageUrl: "https://cdn.themodestman.com/wp-content/uploads/2015/10/Sergio-Arteaga-wearing-custom-suit.jpg",
        category: "mensbig",
        title: "big guy 5"
    },
    {
        imageUrl: "http://img2.timeinc.net/people/i/2016/startracks/160314/jonah-hill-435.jpg",
        category: "mensbig",
        title: "big guy 6"
    },
    {
        imageUrl: "https://i.pinimg.com/originals/11/d5/35/11d53520da686970cee83cd2f38ec8ab.jpg",
        category: "mensbig",
        title: "big guy 7"
    },
    {
        imageUrl: "https://cdn.famousoutfits.com/wp-content/uploads/2014/collections/large-men-fashion/large-men-fashion-36.jpg",
        category: "mensbig",
        title: "big guy 8"
    },
    {
        imageUrl: "https://ae01.alicdn.com/kf/HTB1yQYuQpXXXXXlaXXXq6xXFXXX3/Latest-Coat-Pant-Designs-Light-Grey-Men-Suit-Slim-Fit-Tuxedo-Skinny-3-Piece-Blazer-Groom.jpg",
        category: "mensbig",
        title: "big guy 9"
    },
    {
        imageUrl: "https://cdn.famousoutfits.com/wp-content/uploads/2014/collections/large-men-fashion/large-men-fashion-34.jpg",
        category: "mensbig",
        title: "big guy 10"
    },
    {
        imageUrl: "https://cdn.famousoutfits.com/wp-content/uploads/2014/collections/large-men-fashion/large-men-fashion-15.jpg",
        category: "mensbig",
        title: "big guy 11"
    },
    {
        imageUrl: "https://cdn.famousoutfits.com/wp-content/uploads/2014/collections/large-men-fashion/large-men-fashion-21.jpg",
        category: "mensbig",
        title: "big guy 12"
    },
    {
        imageUrl: "https://cdn2.blovcdn.com/bloglovin/aHR0cCUzQSUyRiUyRmltYWdlcy50aGVzYXJ0b3JpYWxpc3QuY29tJTJGdGh1bWJuYWlscyUyRjIwMTclMkYwNiUyRjYxNTE3ZGdmLmpwZw==?checksum=032ba3f069c9547ab7783d2aac1c70fcfc10a361&format=j",
        category: "mensmedium",
        title: "medium guy 1"
    },
    {
        imageUrl: "https://i.pinimg.com/originals/f6/12/e1/f612e155f0d4e7a7da124e59e4109bdf.jpg",
        category: "mensmedium",
        title: "medium guy 2"
    },
    {
        imageUrl: "https://i.pinimg.com/originals/ff/57/db/ff57dbf8e82b5fb7f6cf42e879940272.jpg",
        category: "mensmedium",
        title: "medium guy 3"
    },
    {
        imageUrl: "http://buzz16.com/wp-content/uploads/2018/03/Average-Men%E2%80%99s-Casual-Outfits-for-Men-over-50-26.jpg",
        category: "mensmedium",
        title: "medium guy 4"
    },
    {
        imageUrl: "https://scontent-lga3-1.cdninstagram.com/vp/dc29f4cfbb4de60fce96882aab0cd597/5C4E8E62/t51.2885-15/e35/42411940_337373233701582_1995201698462308323_n.jpg",
        category: "mensmedium",
        title: "medium guy 5"
    },
    {
        imageUrl: "https://imgprx.livejournal.net/b359685b1f6fdb03016a3c54ab7741d4418112b4/WkTmDF5quW7GOvfP-tR2iQmrHBb8lNHBiEYO-hUHwKim_XhFjduerkFiAj5gxLyb1leEhu-DWfWrOeKKeE5xRLTEa9Mq1SgZYRtTi1qhOTr9CgO8Ea_RwUVHmds9n-vc",
        category: "mensmedium",
        title: "medium guy 6"
    },
    {
        imageUrl: "https://i.pinimg.com/originals/e3/03/39/e303398fc04d11d0b9c06536e256595e.jpg",
        category: "mensmedium",
        title: "medium guy 7"
    },
    {
        imageUrl: "https://cdn.shopify.com/s/files/1/0408/8741/files/street_style_large.jpg?3326675960114568128",
        category: "mensmedium",
        title: "medium guy 8"
    },
    {
        imageUrl: "https://images.vogue.it/gallery/35096/Big/c9dc7ada-a09b-4f34-aba0-625ce7e49957.jpg",
        category: "mensmedium",
        title: "medium guy 9"
    },
    {
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sam-heughan-is-seen-on-july-30-2018-in-new-york-city-news-photo-1007899134-1533051288.jpg?crop=1xw:1xh;center,top&resize=768:*",
        category: "mensmedium",
        title: "medium guy 10"
    },
    {
        imageUrl: "https://i2-prod.mirror.co.uk/incoming/article8194356.ece/ALTERNATES/s615b/Jay-Z.jpg",
        category: "mensmedium",
        title: "medium guy 11"
    },
    {
        imageUrl: "http://cdn01.cdn.justjared.com/wp-content/uploads/2012/09/washington-gq/denzel-washington-covers-gq-october-style-playbook-01.jpg",
        category: "mensmedium",
        title: "medium guy 12"
    },
    {
        imageUrl: "http://www.kinowear.com/wp-content/uploads/2014/05/71.jpg",
        category: "menssmall",
        title: "small guy 1"
    },
    {
        imageUrl: "http://www.kinowear.com/wp-content/uploads/2014/05/27.jpg",
        category: "menssmall",
        title: "small guy 2"
    },
    {
        imageUrl: "http://buzz16.com/wp-content/uploads/2017/02/Fashion-Tips-for-Tall-Skinny-Guys-1.1.jpg",
        category: "menssmall",
        title: "small guy 3"
    },
    {
        imageUrl: "http://buzz16.com/wp-content/uploads/2017/02/Fashion-Tips-for-Tall-Skinny-Guys-3.1.jpg",
        category: "menssmall",
        title: "small guy 4"
    },
    {
        imageUrl: "http://buzz16.com/wp-content/uploads/2017/02/Fashion-Tips-for-Tall-Skinny-Guys-5.1.jpg",
        category: "menssmall",
        title: "small guy 5"
    },
    {
        imageUrl: "http://buzz16.com/wp-content/uploads/2017/02/Fashion-Tips-for-Tall-Skinny-Guys-6.1.jpg",
        category: "menssmall",
        title: "small guy 6"
    },
    {
        imageUrl: "http://buzz16.com/wp-content/uploads/2017/02/Fashion-Tips-for-Tall-Skinny-Guys-9.jpg",
        category: "menssmall",
        title: "small guy 7"
    },
    {
        imageUrl: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/35534055_1908045185907903_487211718439600128_o.jpg?_nc_cat=109&_nc_ht=scontent-iad3-1.xx&oh=38af2d30ce433c51154e0ba34f882834&oe=5C4F0B9A",
        category: "menssmall",
        title: "small guy 8"
    },
    {
        imageUrl: "http://www.mtv.com.au/sites/default/files/styles/carousel_wide/public/mtv_au/articles/2015/08/24/screen_shot_2015-08-24_at_10.40.59.png?itok=fkHkKgMP",
        category: "menssmall",
        title: "small guy 9"
    },
    {
        imageUrl: "https://i.pinimg.com/originals/fb/b0/86/fbb086320c6787f7382ab5a80e6fa1b2.jpg",
        category: "menssmall",
        title: "small guy 10"
    },
    {
        imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_4fSEIU1BX0/v0/1800x-1.jpg",
        category: "menssmall",
        title: "small guy 11"
    },
    {
        imageUrl: "https://static.fashionbeans.com/wp-content/uploads/2015/10/tallerproportions.jpg",
        category: "menssmall",
        title: "small guy 12"
    },
    {
        imageUrl: "https://avatars.mds.yandex.net/get-zen_doc/197791/pub_5ba15bdbd657fa00aabcd46f_5ba15e4d9202e100a9d6fe87/orig",
        category: "womansbig",
        title: "big woman 1"
    },
    {
        imageUrl: "https://avatars.mds.yandex.net/get-zen_doc/1101877/pub_5ba15bdbd657fa00aabcd46f_5ba16178409cd800a95ad20a/scale_1200",
        category: "womansbig",
        title: "big woman 2"
    },
    {
        imageUrl: "https://i.imgur.com/WCDTpk7.jpg",
        category: "womansbig",
        title: "big woman 3"
    },
    {
        imageUrl: "https://i.imgur.com/OFXtFVQ.jpg",
        category: "womansbig",
        title: "big woman 4"
    },
    {
        imageUrl: "https://i.imgur.com/agsmltw.jpg",
        category: "womansbig",
        title: "big woman 5"
    },
    {
        imageUrl: "https://i.pinimg.com/originals/29/e0/93/29e0938312421cc675155641303a031a.jpg",
        category: "womansbig",
        title: "big woman 6"
    },
    {
        imageUrl: "https://8ar4t3vybbw81is9bkyqs194-wpengine.netdna-ssl.com/wp-content/uploads/2012/11/tumblr_mcueu7SOjR1qg7d0h.jpg",
        category: "womansbig",
        title: "big woman 7"
    },
    {
        imageUrl: "https://i.pinimg.com/originals/cc/fb/21/ccfb21974f4f1fc2ece66717bafa6307.jpg",
        category: "womansbig",
        title: "big woman 8"
    },
    {
        imageUrl: "https://66.media.tumblr.com/c3f9d4aaf6f7bd468160ef578c9630e8/tumblr_pgc2wueAzV1qh7iaxo1_640.jpg",
        category: "womansbig",
        title: "big woman 9"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/c6/b1/87/c6b187b9cc4e00ebcc454592b6ef4e26.jpg",
        category: "womansbig",
        title: "big woman 10"
    },
    {
        imageUrl: "https://www.forever21.com/images/1_front_750/00299347-01.jpg",
        category: "womansbig",
        title: "big woman 11"
    },
    {
        imageUrl: "https://www.curvygirlchic.com/wp-content/uploads/2014/11/DSC_4539edited2copy.jpg",
        category: "womansbig",
        title: "big woman 12"
    },
    {
        imageUrl: "https://qph.fs.quoracdn.net/main-qimg-a540e38be12061c4020ec136631cd5f3.webp",
        category: "womansmedium",
        title: "medium woman 1"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/3f/24/3d/3f243da211ff8672f7f7f32004231c48.jpg",
        category: "womansmedium",
        title: "medium woman 2"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/3b/56/05/3b56052bebb8d35dfa5158874e2874e7.jpg",
        category: "womansmedium",
        title: "medium woman 3"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/e2/ce/10/e2ce101ec91de1917de15ef5c7e02cd6.jpg",
        category: "womansmedium",
        title: "medium woman 4"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/81/b1/58/81b158e6070a8607ce0ab1f6db171250.jpg",
        category: "womansmedium",
        title: "medium woman 5"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/1e/51/ba/1e51bacfb3c3ce071b2a7d2c37165cef.jpg",
        category: "womansmedium",
        title: "medium woman 6"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/da/27/1f/da271fc375f0b50c126999782d6fb064.jpg",
        category: "womansmedium",
        title: "medium woman 7"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/3f/bf/d4/3fbfd453b4d37247fbc7c147c48366e5.jpg",
        category: "womansmedium",
        title: "medium woman 8"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/1b/66/59/1b66596ae7fe4bb6c1ac2223cf022b72.jpg",
        category: "womansmedium",
        title: "medium woman 9"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/f9/95/1a/f9951a7ab555a10cb3e7c64a3ba4290a.jpg",
        category: "womansmedium",
        title: "medium woman 10"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/89/04/1c/89041c541ae34cd603db13ba93c29f83.jpg",
        category: "womansmedium",
        title: "medium woman 11"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/8e/ce/0b/8ece0bdecfc47774e0d3c2b698b6cef9.jpg",
        category: "womansmedium",
        title: "medium woman 12"
    },
    {
        imageUrl: "https://www.gorgeautiful.com/wp-content/uploads/2014/04/How-to-fashion-for-petite-figure.jpg",
        category: "womanssmall",
        title: "small woman 1"
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKve0ryLYiwm7cqE8jeRcxrZDI_nCrQVNGI0yLh3iIIUt4w6y",
        category: "womanssmall",
        title: "small woman 2"
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI-_ELW9m_hzqc94Jf-l2xx72_GYUBdj2Wqa5Vub7YfBSNLD9E2A",
        category: "womanssmall",
        title: "small woman 3"
    },
    {
        imageUrl: "https://zigverve.com/wp-content/uploads/2015/12/Fashion-tips-for-petite-woman.jpg",
        category: "womanssmall",
        title: "small woman 4"
    },
    {
        imageUrl: "https://www.gorgeautiful.com/wp-content/uploads/2014/02/Petite-Figure-Fashion-Tips-Tuck-in-Tops.jpg",
        category: "womanssmall",
        title: "small woman 5"
    },
    {
        imageUrl: "https://www.gorgeautiful.com/wp-content/uploads/2014/04/Petite-Fashion-Style-with-Prints.jpg",
        category: "womanssmall",
        title: "small woman 6"
    },
    {
        imageUrl: "https://i.pinimg.com/564x/ab/b2/da/abb2da290b1e91d191a4ff6170630e23.jpg",
        category: "womanssmall",
        title: "small woman 7"
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzML5RJgwp1ufQf1TgMHHMskH5NCBEZvfNfzUHsQ92jvjvGzaX",
        category: "womanssmall",
        title: "small woman 8"
    },
    {
        imageUrl: "https://dimg.dillards.com/is/image/DillardsZoom/nav/adrianna-papell-petite--sequin-bodice-gown/05493337_zi_black.jpg",
        category: "womanssmall",
        title: "small woman 9"
    },
    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72dg4qSnKAHBVHyLmls58ukavGv9Df03gRPx9ApzNbfMAyYFjYw",
        category: "womanssmall",
        title: "small woman 10"
    },
    {
        imageUrl: "http://www.fashiondioxide.com/wp-content/uploads/2017/05/Dressing-Tips-for-Petite-Woman-45.jpeg",
        category: "womanssmall",
        title: "small woman 11"
    },
    {
        imageUrl: "http://www.fashiondioxide.com/wp-content/uploads/2017/05/Dressing-Tips-for-Petite-Woman-47.jpeg",
        category: "womanssmall",
        title: "small woman 12"
    },



];

module.exports = function () {
    if (false) {
        for (let i = 0; i < objects.length; i++) {
            const model = new db.body({
                image_URL: objects[i].imageUrl,
                title: objects[i].title,
                category: objects[i].category
            });

            model.save((err, obj) => {
                if (err) {
                    console.error("error occurred initializing database object:" + JSON.stringify(error));
                }
            })
        }
    }
};
