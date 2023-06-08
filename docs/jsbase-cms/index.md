# JSBase CMS

Create a NestJS APIs application for a content management system

## Glossary

### The apis must have the following modules:

#### 1. User Module with RBAC ( role base access control )

**Example**:

- **User** A has **role** Admin
- Admin **role** can: create user, update user, find a user, delete user ( excerpt himself and super admin)
- Admin **role** can also: create a post, update a post, find a post, delete a post
- **Super Admin** is a user has a full permissions on all resources
- **User** has those main properties: email(unique), first name, last name, password, status

#### 2. Files

**Example**:

- User can upload a **File** named pic1.jpg, image type is default.
- File size limit is 2MB
- A system must create 3 sizes of this picture if this file has image type is default: large, medium and small size
- LargeSize, MediumSize, Small Size had been configured in the environment
- User can upload, update, find, delete files if they have permissions
- **File** has those main properties: filename, filesize, filetype, storage path, title, description, attachmentLink(downloadable link), inlineLink( can be displayed inside a webpage)

#### 3. CMS

**A CMS module must have the following parts**:

- A Page has these main properties: title, slug(unique), description, content, image, parent page ( can be null if this page is a root level page), template_id (a page template - can be null), seo_meta_options
- A Post has these main properties: title, slug(unique), description, content, image, video_link, audio_link, author ( a user who create this post ), and it must belong to a category, and tags, seo_meta_options, post_type
- A Category has these main properties: title, description, image, a parent category ( can be null if this category is a root level category), seo_meta_options
- A Tag has these main properties: title, color( hex format), seo_meta_options
- Post type can be an: article, video, audio, postcard
- Template list with id and name will be configured in system setting files(static)
- SEO meta options: robots(index, follow, max-preview-image, max-snippet, max-video-preview)
- Sitemap
- Site setting: site name, description, seo meta for site ( key, value, input type(text,textarea,file,number))
- Contact form: title, fields
- SMTP Configuration

### SEO meta standard

```html
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<link rel="preconnect" href="https://www.google-analytics.com" />
<link rel="preconnect" href="https://www.googletagmanager.com" />

<meta
  name="robots"
  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
/>

<title>Google: Increase Discover Traffic with Max Image Preview Tag</title>
<meta
  name="description"
  content="Google published case study showing how a simple meta tag can increase clicks from Discover by over 300%"
/>
<link
  rel="canonical"
  href="https://sonnm.com/increase-google-traffic-with-max-image-preview-tag/416123/"
/>
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="article" />
<meta
  property="og:title"
  content="Google: Increase Discover Traffic with Max Image Preview Tag"
/>
<meta
  property="og:description"
  content="Google published case study showing how a simple meta tag can increase clicks from Discover by over 300%"
/>
<meta
  property="og:url"
  content="https://sonnm.com/increase-google-traffic-with-max-image-preview-tag/416123/"
/>
<meta property="og:site_name" content="Nguyen Minh Son - Digital Expert" />
<meta
  property="article:publisher"
  content="http://www.facebook.com/nguyen-minh-son"
/>
<meta
  property="article:author"
  content="https://www.facebook.com/nguyen-minh-son"
/>
<meta property="article:published_time" content="2021-08-12T09:17:45+00:00" />
<meta property="article:modified_time" content="2021-08-16T09:44:29+00:00" />
<meta
  property="og:image"
  content="https://sonnm.com/wp-content/uploads/2021/08/max-image-preview-6114e70750b50-sej.jpg"
/>
<meta property="og:image:width" content="1600" />
<meta property="og:image:height" content="840" />
<meta property="og:image:type" content="image/jpeg" />
<meta name="author" content="Nguyen Minh Son" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@sonnm" />
<meta name="twitter:site" content="@sonnm" />
<meta name="twitter:label1" content="Written by" />
<meta name="twitter:data1" content="Nguyen Minh Son" />
<meta name="twitter:label2" content="Est. reading time" />
<meta name="twitter:data2" content="3 minutes" />
```

**Optimize picture**

```html
<picture>
  <source
    type="image/webp"
    srcset="
      https://www.sonnm.com/wp-content/uploads/2021/08/max-image-preview-6114e70750b50-sej-760x400.webp  1x,
      https://www.sonnm.com/wp-content/uploads/2021/08/max-image-preview-6114e70750b50-sej-1520x800.webp 1.5x
    "
  />
  <img
    fetchpriority="high"
    src="https://www.sonnm.com/wp-content/uploads/2021/08/max-image-preview-6114e70750b50-sej-760x400.jpg"
    width="760"
    height="400"
    alt="Google: Increase Discover Traffic with Max Image Preview Tag"
    srcset="
      https://www.sonnm.com/wp-content/uploads/2021/08/max-image-preview-6114e70750b50-sej-1520x800.jpg 1.5x
    "
  />
</picture>
```

```bash
sudo apt-get update
sudo apt-get install webp
cwebp images/flower.jpg -o images/flower.webp
for file in images/*; do cwebp "$file" -o "${file%.*}.webp"; done
```

```html
<script src="js/modernizr-custom.js" async></script>

<picture>
  <source media="(min-width: 768px)" type="image/webp" srcset="image_pc.webp" />
  <source media="(max-width: 767px)" type="image/webp" srcset="image_sp.webp" />
  <img src="image_pc.png" alt="Alt Text!"">
</picture>
<style type="text/css">
  .webp .elementWithBackgroundImage {
    background-image: url("image.webp");
  }

  .no-webp .elementWithBackgroundImage {
    background-image: url("image.png");
  }
</style>
```

### Resources

- User: a person who use the system
- Role: a group of user has same set of permissions
- Permission: a specific policy to define user's permission in specific context and a resource
- File : a user's uploaded file which has been stored at a specific location (in a s3 bucket)
- Page : a page with a specific template and content
- Post : an article/video/audio/postcard/any custom post type (configured in enviroment)
- Category: a group of posts, a post can only belong to one category
- Tag: a group of posts which , a post can belong to multiple tags
- Contact Form: the contact form

## Models

...

### Business Logic

## Database Schema

...

### Migration and seeds

## Layer Architecture

### Controllers

### Services

### Repositories

## Goals

At the end, the project should have:

- The private endpoints to manage those above resources
- The public endpoint to login, reset password, oauth with google/facebook/linkedin
- The public endpoint for a public website: categories, pages, posts, settings, sitemap

## Tools

- https://www.webpagetest.org/
- https://web.dev/serve-images-webp/
- Lazy load for picture with : https://www.npmjs.com/package/lazysizes
- https://www.npmjs.com/package/sitemap?activeTab=readme
- https://www.npmjs.com/package/next-sitemap
- https://www.npmjs.com/package/express-sitemap-xml
