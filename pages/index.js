import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Timeline from '../components/Timeline';

export default function Home() {
  const imageData = [
    
      { src: "/images/image12.png", caption: "Hi Al!"},
      { src: "/images/image13.png", caption: "This is one of many open mouth photos but this one is fun so I've added it first"},
      { src: "/images/IMG_0833.JPG", caption: "This one is very early back in Tucson, and I still had control of my shirt"},
      { src: "/images/IMG_0874.JPG", caption: "We went and got bagels from Bubbe's and I got lox"},
      { src: "/images/IMG_0882.JPG", caption: "My usual view"},
      { src: "/images/IMG_0901.PNG", caption: "Uh oh, begin blurry long distance facetime"},
      { src: "/images/IMG_0924.PNG", caption: "You look quite impressed"},
      { src: "/images/IMG_0946.PNG", caption: "Discussing the best wordle word (Its in the photo)"},
      { src: "/images/IMG_0959.PNG", caption: "Prepare for some in bed photos! 1."},
      { src: "/images/IMG_0985.PNG", caption: "2. (Glasses!)"},
      { src: "/images/IMG_1029.PNG", caption: "3. (Very tired)"},
      { src: "/images/IMG_1041.jpeg", caption: "A couple rooftop bar shots"},
      { src: "/images/IMG_1048.jpeg", caption: "I'm sure you'll say you dont look good but I disagree"},
      { src: "/images/IMG_1056.jpeg", caption: "Bagel + Hiding"},
      { src: "/images/IMG_1060.jpeg", caption: "Sunning like a turtle"},
      { src: "/images/IMG_1072.jpeg", caption: "Fancy dinner at Cathedral, remember our annoying neighbors?"},
      { src: "/images/IMG_1077.jpeg", caption: "lol"},
      { src: "/images/IMG_1078.jpeg", caption: "nice!"},
      { src: "/images/IMG_1079.jpeg", caption: "More Art!"},
      { src: "/images/IMG_1083.jpeg", caption: "Has a headache, no more art please"},
      { src: "/images/IMG_1093.jpeg", caption: "RIBS and Peanut Butter Spaghetti"},
      { src: "/images/IMG_1130.jpeg", caption: "Picking up from the airport in Nov + Face cookie"},
      { src: "/images/IMG_1188.PNG", caption: "The matrix"},
      { src: "/images/IMG_1193.PNG", caption: "I think this was when the avocado shirt was purchased"},
      { src: "/images/IMG_1198.PNG", caption: "My shirt + My Dad's birthday cut-out in December"},
      { src: "/images/IMG_1237.PNG", caption: "Cucumber!"},
      { src: "/images/IMG_1378.jpeg", caption: "Smiley in Central Park"},
      { src: "/images/IMG_1754.jpeg", caption: "Banana Bread! (Turned out great)"},
      { src: "/images/IMG_1762.jpeg", caption: "Looking at old religous stuff on your bday"},
      { src: "/images/IMG_1776.JPG", caption: "Before we got soaked"},
      { src: "/images/IMG_2067.jpeg", caption: "Thanksgiving Tennis situation (Basically Nadal)"},
      { src: "/images/lp_image2.jpeg", caption: "And now we embark on a marathon of bed time photos! 1."},
      { src: "/images/lp_image3.jpeg", caption: "Slightly mistimed 2."},
      { src: "/images/lp_image4.jpeg", caption: "Got it 3."},
      { src: "/images/lp_image5.jpeg", caption: "Oops this one is not in bed"},
      { src: "/images/lp_image6.jpeg", caption: "Thinking! 4."},
      { src: "/images/lp_image7.jpeg", caption: "I said something funny 5."},
      { src: "/images/lp_image8.jpeg", caption: "Possibly askig a question here... not sure 6."},
      { src: "/images/lp_image9.jpeg", caption: "Withholding 7."},
      { src: "/images/lp_image10.jpeg", caption: "I said something funny + glasses 8."},
      { src: "/images/lp_image11.jpeg", caption: "Thinking again 9."},
      { src: "/images/lp_image12.jpeg", caption: "Ha! Got another one 10."},
      { src: "/images/lp_image13.jpeg", caption: "Hoody mode"},
      { src: "/images/lp_image14.jpeg", caption: "Staring! 11."},
      { src: "/images/lp_image15.jpeg", caption: "Fake smile or dicey work situation 12."},
      { src: "/images/lp_image16.jpeg", caption: "A THIRD ONE 13. "},
      { src: "/images/lp_image.jpeg", caption: "Final snuggle photo 14."},
  ];

  return (
    <div className="container">
      <Head>
        <title>My Pal!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Al Pal!" />
        
        <Timeline images={imageData} />

        <p>Al, I wanted to capture some memories over the last year. I started to get fancy with this... I had the images and text 
          slamming down one at a time with an automatic scrolling function. I thought about implementing some kind of tree structure as well 
          so it would look like you were descending a vine. I was going to make the background change colors and add borders aligned around the 
          images and text. I spun up a boiler plate next.js app, created a development server using NPM, cloned the github repo onto 
          my local machine, added the static photos into an asset diretory, realized that some of the photos were too big, making it take 
          forever to load, compressed the images down to a few MBs, created an array for my images with a caption, added a new timeline component
          adjusted the CSS config, staggered the images, drew borders around the images, added a new CSS class, created a slamming effect, 
          applied that to each image in combination with a scroll delay to load the image, slam, and scroll...
        </p>
        <p>Then I realized, I dont have great design skills, I'm not a web dev, and the more fancy shit I add to this site the worse it's going 
          to look... haha. 
        </p>
        <p>So I've kept it pretty straightforward. I've positioned the photos a bit, and added a small caption of what the photo reminded me of and a 
          little turtle at the bottom. No drama, nothing crazy, just a bunch of good times... which I'm happy to say, despite a variety of difficult circumstances, is a good 
          summary of our relationship. Neither of us are perfect, but you are just as funny and witty as when I first met you last year 
          down in Tucson and stole you hear by complimenting your Go-yard bag. You are passionate and thoughtful in both work and your relationships. You are going to do great in med school, and I'm
          certain you will impact/help many people throughout your life. 
        </p>
        <p>I know you like post-cards, but bare with me for a second as I explain in technical detail why standing up a website is ideal here...
          JK I know you would stop reading! I'm excited to watch you excel in med school, go on adventures with you, and whatever else the next few 
          years holds.
        </p>
        <p>Love, Sam </p>

      </main>

      <Footer />
    </div>
  )
}



