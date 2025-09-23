# Devil-Line Windsurfing Homepage

## 🌊 About

Source code of the Devil-Line Windsurfing homepage.

## 🚀 Installation and Deployment

1. **Install Dependencies**:

    ```sh
    npm install
    ```

2. **Run Development Server**:

    ```sh
    npm run dev
    ```

3. **Build for Production**:

    ```sh
    npm run build
    ```

## 📚 Component Documentation

### Article

A component for displaying articles.

```astro
<Article contain={true}>
  <h1>Title</h1>
  <p>Content goes here...</p>
</Article>
```

### Badge

A component for displaying badges.

```astro
<Badge color="primary" title="New" />
```

### Button

A component for displaying buttons.

```astro
<Button color="primary" url="/contact">Contact Us</Button>
```

### ButtonCallUs

A component for displaying a call-to-action button.

```astro
<ButtonCallUs />
```

### Card

A component for displaying cards.

```astro
<Card>
  <h2>Card Title</h2>
  <p>Card content goes here...</p>
</Card>
```

### Footer

A component for displaying the footer.

```astro
<Footer />
```

### FormBook

A component for displaying a booking form.

```astro
<FormBook />
```

### FormContact

A component for displaying a contact form.

```astro
<FormContact />
```

### Grid

A component for displaying a grid layout.

```astro
<Grid>
  <div slot="grid-content-1">Content 1</div>
  <div slot="grid-content-2">Content 2</div>
  <div slot="grid-content-3">Content 3</div>
</Grid>
```

### Header

A component for displaying the header.

```astro
<Header />
```

### Heading

A component for displaying headings.

```astro
<Heading>
  <h1 slot="heading-title">Title</h1>
  <p slot="heading-content">Content goes here...</p>
</Heading>
```

### Hero

A component for displaying the hero section.

```astro
<Hero>
  <div slot="hero-content-left">Left Content</div>
  <div slot="hero-content-right">Right Content</div>
</Hero>
```

### Menu

A component for displaying a menu.

```astro
<Menu />
```

### ReviewSlider

A component for displaying a review slider.

```astro
<ReviewSlider />
```

### Section

A component for displaying a section.

```astro
<Section>
  <p>Section content goes here...</p>
</Section>
```

### WideImage

A component for displaying a wide image.

```astro
<WideImage src={importedImage} alt="alt description" />
```
