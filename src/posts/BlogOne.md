---
title: "A Blog On Making A Blog"
date: "2025-11-07"
description: "An origin story of this blog."
tags: ["blog", "portfolio", "test"]
---

<div class="markdown">
  <h2 style="color: #ffcc00;">Not Really A Blog</h2>

  <p>Let's get to the point. I'm not a blogger. It's not that I am afraid of the label or how people will look at me, I'm just not a blogger. My spelling is terrible (stay tuned for why I left the spelling mistakes). Bloggers give vibes of half-hearted writing, some good, some bad, competing to see who can get more clicks. Clicks = conversions, conversions = profit. But at this point in my life, though I think my opinions have a lot of weight to them, no one else does. I don't have a following (I don't use social media), and no one who knows me is going to read this (not yet at least). So why write?</p>

  <p>In part, I write for myself. But I need to think outside of my narrow personal goals. If I intend to post this, to leave this up even for the rest of my life, I need to think about the future. In the future, maybe people will be reading this "blog" (maybe they won't). So how can I bring value to a sixteen-year-old, who like myself at the time, was looking for answers? How can I bring value to anyone, twenty years from now, but look ahead (like in chess) and create that value right now? That is my goal in this "post".</p>

  <p>Today (which you may be reading <strong>twenty years</strong> from now) I am going to share with you the technical aspects of...</p>
  <ul>
    <li><a href="#blog">How I made this "blog".</a></li>
    <li><a href="#website">How I made this website.</a></li>
    <li><a href="#contacts">How I made a contacts page.</a></li>
    <li><a href="#iterate">How I plan to iterate forward.</a></li>
  </ul>
  <p>Those aspects of this article will bring value to you. But truthfully, I am not only writing this to be a saint. Everyone does something for a reason, so clearly I have a reason I am writing this. While I want to bring value to your life, kind reader, I also need to get something out of this for myself. So, we will go through the reasons I get value out of this article. Note, this section may benefit the individual looking to understand how I started, and what they can get out of doing exactly what I did. But this section is for me to explicitly show off to the recruiter that is doing a deep dive into my portfolio. I know that if a recruiter made it this far, they are interested in me. Thus, I can show off some of the reasons they should hire me, right here in this post.</p>

  <h2 id="blog">How I made this "blog"</h2>
  <p>Making the blog was the hardest part of this project. I tried all kinds of dependencies and nothing worked. First, Vite5 was not compatible with React Markdown. Then the next option didn't work. Nor did the next. No matter how hard I tried, it was to no avail. I wanted to use React Markdown to balance style with functionality. I can't just import a PDF into my website, which uses different fonts and sizes and headers, and expect it to look good. And I need your user experience to be so good you want to come back even if I misspelled half this article. So I needed more control. The ultimate control would be writing in HTML and styling with CSS. But think about how tedious that would be per article — I'd never post. So I needed to balance functionality, speed, and style. I thought markdown files were the best way to go. But they weren't.</p>

  <p>So I struggled and found a way to convert my articles, written in markdown, to be processed as HTML. Finally, a blog post appeared on my website. But it was ugly. That's okay — that's why I used markdown in the first place! I tried adding a ## for a header and <strong>bolding</strong> words (this is standard markdown syntax if you are unfamiliar), and it didn't work. Instead of having a heading, I just had a bunch of #######. So then I needed to use HTML formatting inside my markdown file to get it to look good. But of course, HTML has limited styling, and the default HTML formats didn't work (lists, for example), so I had to make my own CSS style guide for all my headers, lists, paragraphs, etc. At this point, I am just using HTML with CSS. It actually has less functionality than a normal HTML/CSS setup because I am still converting from a markdown file to HTML, so I lose some functionality in the process. Plus, now that I am writing in VS Code using HTML formatting on a markdown file, I don't have spell check anymore! That is one of the main reasons I needed markdown in the first place.</p>

  <p>So you may be thinking, "He wasted his time and now he has a functional setup that would be better if he just reverted to using HTML and CSS only." You'd be right. But as I will describe later, this experience is giving me more technical know-how than I would have had if everything worked the first time. When we get to the section where I will show off to recruiters, I will share the benefits this gave me. It's a lot like "The Road Not Taken" by Robert Frost. If I had chosen the easy path, I never would have gotten the same knowledge I now have. The knowledge I am sharing with you. Now, you have knowledge I never had. Now, you can decide to struggle, or to do it the right way. The right way is easier, but you might learn less along the way. If you're 40 and have a business, you probably don't need much struggle right now. But if you're in college and learning, why not learn a little more.</p>

  <h3>Let's get technical.</h3>

  <p>You have an overview of my experience (an unedited overview). Now let's talk about the technical aspects. I built this site with React + Vite + Tailwind CSS. 
  If I was going for a professional website, there are plenty of free, no-code website builders out there. But I built this with the desire to learn a new skill and show off 
  a new skill. That is also why I am sharing my experience with you. As I mentioned, there were tons of problems with React Markdown.
  With that said, if I could use a legacy version of Vite, React Markdown might work better. The advantage is the quick
  formatting that markdown files offer. From a productivity perspective, that is much faster than what I am doing here. </p>

  <h2 id="website">How I made this website</h2>
  <p>As I mentioned, I used React + Vite + Tailwind CSS to create this website. The animations are crazy (I have a preference for a 
  minimalist aesthetic), but I still show a lot of skill in creating this site. For one, ChatGPT is getting good at coding. One thing 
  gen AI is terrible with is troubleshooting the million different reasons dependencies won't render with your setup. For example, 
  Chat can cook up a great website, but if it forgot to tell you to <code>pip install 5millionth dependency</code>, you're in for a world of hurt. So while knowing all the technical know-how to React may not be necessary, knowing how to get things downloaded to your device is paramount
  to your success, and it's probably the hardest part of creating any website.</p>

  <p>I started with a simple idea in mind. I wanted a one-page portfolio website to show off the things I felt my resume couldn't.
  I asked Chat to create a simple React + Vite site using templated cards on a single page to display my projects. I told it how I wanted the section cards to look and it took care of the rest. But see how I already knew the framework I wanted to use. That is the most important part. If I had let Chat decide, it would have taken twice the amount of time just to get the dependencies running.</p>

  <p>The hardest part about being a new coder is the abundance of information that exists. Successful businessmen tell you to "work harder and figure it out" because that is what they did. When you get the motivation to work hard, you pull out your computer and say "I'm going to show him, I'm going to build a website!" So you ask Chat, "How do I build a website?" and then you get a million different options for frameworks. Which one is the best? Which one should I use? What if I use the wrong one? You get so caught up in all the options that by the time you've decided, it's dinner time. It feels like that stingy capitalist makes it seem so easy. In reality, what sets apart those who do and those who do not is decisiveness. Pick any framework — it doesn't matter. If it is your first website, it doesn't matter what framework you are using. What
  matters is that you make the decision to act and create something. Don't create nothing. It could be a website with an image of your family, a 
  few links, and some text that says, "I did it." Success doesn't happen in a day — it happens over weeks, months, and years of dedicated effort. Your first website will not be your best website. Your first business idea is likely not going to be your best business idea.</p>

  <p>As I was saying. Once Chat gave me a simple output (after I knew the framework I wanted to use), I started improving the site. First I put in all the things I wanted to show off. Boom, I had a portfolio. Nothing crazy. It was just some dark-themed colors and a simple but pleasant UI. It showed the information I wanted to show in an easy-to-read format. Once I had this simple site, I was able to iterate. I was able to create what you see now. Think of it like this: when you start a school year, you look ahead and say "wow, the end of the year is far away." If you spend every day thinking about the end of the school year, it never comes. But when the end of the year comes, you look back and say "wow, that went by so fast." Each day contributes a small part to completing the year. Each small improvement I made to this website contributed to the final product you see now. If I had waited to make the perfect website, I never would have made anything at all.</p>

  <h2 id="contacts">How I made a contacts page</h2>
  <p>After I had a simple site, I added on some simple UI features (like the ability to click on the section cards). I needed to turn this site into a multi-page application with routes and links. It was pretty easy to figure out, and I didn't need much help from Chat. As you learn, you will probably get to the point where you want to do some coding on your own (i.e. without Chat's help) because you'll want to see what you can do. It might be terrible, but you'll enjoy it because you made it. I thought adding in a contacts page would look good to recruiters looking at my page. That isn't a trivial process, so maybe they would recognize the effort. Having a contacts page has the added bonus that I like helping people. On the off chance that someone reaches out to contact me before I gain any notoriety, I want to be able to serve them however they need. I don't have social media (which makes it very hard for me to start or promote my many business ideas), but I thought a contacts page would be a good start — giving people the ability to contact me. This blog is also part of my makeup for not having social media.</p>

  <h2 id="iterate">How I plan to iterate forward</h2>
  <p>I have a lot of ideas for this site. Most of them probably won't happen. But I think, especially if I want to promote any of my business ideas, one important idea is to find ways to drive traffic to my site. Because I am stingy with my money, I won't be doing ads. Because I don't have social media, I won't have any organic marketing. So the best way for me to take care of SEO and metadata is to ensure search engines treat me well. It will take time and effort, but I think in the long run it will be well worth it.</p>

</div>