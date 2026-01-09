---
title: "The Hierarchy of Generative Models: A Complete Technical Guide"
date: "2026-01-09"
slug: "hierarchy-of-generative-models"
coverImage: "/blog9.png"
excerpt: "From GANs to Diffusion Models, from VAEs to Autoregressive LLMs—this comprehensive guide maps out the entire landscape of generative AI and explains how each family of models works."
tags: ["AI", "Machine Learning", "Generative Models", "Deep Learning", "LLMs"]
publisher: "Noble Stack Team"
---

Generative AI has transformed from a research curiosity into technology that touches billions of lives daily. ChatGPT writes your emails. Midjourney creates your art. Stable Diffusion generates photorealistic images from text descriptions.

But behind these products lies a rich taxonomy of mathematical approaches—each with distinct strengths, trade-offs, and use cases.

At **Noble Stack**, understanding this landscape isn't academic—it's essential for choosing the right tool for each AI project we build. This article provides a comprehensive map of generative model architectures, from foundational concepts to cutting-edge implementations.

---

### Before We Begin: Core Concepts

*This article bridges the gap between technical depth and accessibility for product leaders and engineers alike.*

**Key Definitions:**

*   **Generative Model:** A model that learns the underlying distribution of data and can generate new samples from that distribution.
*   **Latent Space:** A compressed, abstract representation of data. Think of it as the "essence" of an image or text.
*   **Likelihood:** The probability that a model assigns to observed data. Higher likelihood = the model thinks this data is "more realistic."
*   **Sampling:** The process of generating new data points from a learned distribution.
*   **Training:** The process of adjusting model parameters to better capture the data distribution.

---

## The Six Families of Generative Models

Generative models can be organized into six major families, each with a fundamentally different approach to the core problem: *How do you learn to generate realistic data?*

```text
┌─────────────────────────────────────────────────────────────┐
│                   GENERATIVE MODELS                         │
├──────────────────┬──────────────────┬───────────────────────┤
│  Likelihood-Based│  Likelihood-Based│    Energy-Based       │
│  Latent Variable │  Autoregressive  │      Models           │
├──────────────────┼──────────────────┼───────────────────────┤
│  Score-Based     │  Invertible      │   Implicit Density    │
│  Diffusion       │  Flow-Based      │      (GANs)           │
└──────────────────┴──────────────────┴───────────────────────┘
```

Let's explore each family in depth.

---

## 1. Likelihood-Based Latent Variable Models

These models learn a compressed representation (latent space) and maximize the likelihood of generating real data from that space.

### The Core Idea

Imagine you have thousands of photos of faces. A latent variable model tries to find the "recipe" for a face—variables like "how wide are the eyes," "what's the nose shape," "skin tone," etc. Once it learns these latent factors, it can combine them in new ways to generate faces it has never seen.

### Variational Autoencoders (VAE)

VAEs are the foundational architecture in this family. They consist of:

1. **Encoder:** Compresses input data into a latent distribution
2. **Decoder:** Reconstructs data from latent samples

```python
class VAE(nn.Module):
    def __init__(self, latent_dim):
        super().__init__()
        # Encoder: Image → Latent Distribution
        self.encoder = nn.Sequential(
            nn.Linear(784, 400),
            nn.ReLU()
        )
        self.fc_mu = nn.Linear(400, latent_dim)
        self.fc_var = nn.Linear(400, latent_dim)
        
        # Decoder: Latent Sample → Image
        self.decoder = nn.Sequential(
            nn.Linear(latent_dim, 400),
            nn.ReLU(),
            nn.Linear(400, 784),
            nn.Sigmoid()
        )
    
    def encode(self, x):
        h = self.encoder(x)
        return self.fc_mu(h), self.fc_var(h)
    
    def reparameterize(self, mu, log_var):
        # The "reparameterization trick" for backpropagation
        std = torch.exp(0.5 * log_var)
        eps = torch.randn_like(std)
        return mu + eps * std
    
    def decode(self, z):
        return self.decoder(z)
```

**Key Insight:** The "reparameterization trick" is what makes VAEs trainable. Instead of sampling directly (which blocks gradients), we sample noise separately and transform it.

### β-VAE

β-VAE adds a hyperparameter β that controls the trade-off between reconstruction quality and latent space disentanglement.

```python
# VAE Loss with β weighting
def vae_loss(recon_x, x, mu, log_var, beta=4.0):
    reconstruction_loss = F.binary_cross_entropy(recon_x, x, reduction='sum')
    kl_divergence = -0.5 * torch.sum(1 + log_var - mu.pow(2) - log_var.exp())
    return reconstruction_loss + beta * kl_divergence
```

Higher β values create more interpretable latent spaces where each dimension controls a single factor (e.g., one dimension for hair color, another for age).

### Hierarchical VAE

Hierarchical VAEs stack multiple latent layers, enabling the model to capture both high-level concepts (is this a cat or dog?) and fine details (fur texture, eye color).

**Applications:** Image generation, anomaly detection, drug discovery, representation learning.

---

## 2. Likelihood-Based Autoregressive Models

Autoregressive models generate data one piece at a time, conditioning each new piece on everything that came before.

### The Core Idea

Think of writing a sentence. You don't generate all words simultaneously—you write "The," then "cat," then "sat," each word influenced by the previous ones. Autoregressive models formalize this:

```
P(x) = P(x₁) × P(x₂|x₁) × P(x₃|x₁,x₂) × ... × P(xₙ|x₁,...,xₙ₋₁)
```

### Autoregressive LLMs (GPT, Claude, etc.)

The models powering modern AI assistants are autoregressive. They predict the next token given all previous tokens.

```python
class SimpleTransformerBlock(nn.Module):
    def __init__(self, d_model, n_heads):
        super().__init__()
        self.attention = nn.MultiheadAttention(d_model, n_heads)
        self.feed_forward = nn.Sequential(
            nn.Linear(d_model, 4 * d_model),
            nn.GELU(),
            nn.Linear(4 * d_model, d_model)
        )
        self.ln1 = nn.LayerNorm(d_model)
        self.ln2 = nn.LayerNorm(d_model)
    
    def forward(self, x, mask=None):
        # Self-attention with causal mask
        attn_out, _ = self.attention(x, x, x, attn_mask=mask)
        x = self.ln1(x + attn_out)
        x = self.ln2(x + self.feed_forward(x))
        return x
```

**Key Insight:** The causal mask ensures the model can only "see" previous tokens when predicting the next one—this is what makes it autoregressive.

### PixelCNN

PixelCNN applies the autoregressive principle to images, generating one pixel at a time, left-to-right, top-to-bottom.

```python
class MaskedConv2d(nn.Conv2d):
    def __init__(self, mask_type, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.register_buffer('mask', self.weight.data.clone())
        _, _, h, w = self.weight.size()
        self.mask.fill_(1)
        # Mask future pixels
        self.mask[:, :, h // 2, w // 2 + (mask_type == 'B'):] = 0
        self.mask[:, :, h // 2 + 1:] = 0
    
    def forward(self, x):
        self.weight.data *= self.mask
        return super().forward(x)
```

The masked convolution ensures each pixel only depends on pixels above and to the left.

### WaveNet

WaveNet extends autoregressive modeling to audio, generating raw waveforms sample by sample. It uses dilated causal convolutions to capture long-range dependencies efficiently.

**Applications:** Text generation (ChatGPT, Claude), image generation (PixelCNN), audio synthesis (WaveNet), music generation.

**Trade-off:** Autoregressive generation is slow because samples must be generated sequentially. A 1024-token output requires 1024 forward passes.

---

## 3. Energy-Based Models (EBMs)

Energy-based models assign an "energy" score to each possible data point. Low energy = realistic data. High energy = unrealistic data.

### The Core Idea

Instead of directly modeling probability, EBMs learn a function E(x) that assigns low values to real data and high values to fake data. The probability is then:

```
P(x) = exp(-E(x)) / Z
```

Where Z is the normalization constant (the sum of exp(-E(x)) over all possible x).

### Restricted Boltzmann Machines (RBM)

RBMs were the workhorses of early deep learning. They have visible and hidden units with restricted connections.

```python
class RBM:
    def __init__(self, n_visible, n_hidden):
        self.W = np.random.randn(n_visible, n_hidden) * 0.01
        self.v_bias = np.zeros(n_visible)
        self.h_bias = np.zeros(n_hidden)
    
    def sample_hidden(self, v):
        activation = np.dot(v, self.W) + self.h_bias
        prob = 1 / (1 + np.exp(-activation))
        return (np.random.random(prob.shape) < prob).astype(float)
    
    def sample_visible(self, h):
        activation = np.dot(h, self.W.T) + self.v_bias
        prob = 1 / (1 + np.exp(-activation))
        return (np.random.random(prob.shape) < prob).astype(float)
```

### Deep Belief Networks

Deep Belief Networks stack multiple RBMs, with each layer learning increasingly abstract features.

### Langevin Dynamics

Langevin dynamics uses the gradient of the energy function to sample from the distribution:

```python
def langevin_sampling(energy_fn, x_init, n_steps=100, step_size=0.1):
    x = x_init.clone().requires_grad_(True)
    
    for _ in range(n_steps):
        energy = energy_fn(x)
        grad = torch.autograd.grad(energy.sum(), x)[0]
        
        # Langevin update: gradient descent + noise
        noise = torch.randn_like(x) * np.sqrt(2 * step_size)
        x = x - step_size * grad + noise
        x = x.detach().requires_grad_(True)
    
    return x
```

**Applications:** Anomaly detection, structured prediction, compositionality (combining concepts).

**Challenge:** The normalization constant Z is intractable for complex models, making training difficult.

---

## 4. Score-Based Diffusion Models

Diffusion models have revolutionized image generation. They work by learning to reverse a gradual noising process.

### The Core Idea

1. **Forward Process:** Gradually add noise to real images until they become pure Gaussian noise
2. **Reverse Process:** Learn to remove noise step-by-step, recovering the original image

```
Real Image → Slightly Noisy → More Noisy → ... → Pure Noise
                         ↓ LEARN THIS DIRECTION ↓
Pure Noise → Less Noisy → ... → Slightly Noisy → Generated Image
```

### Denoising Diffusion Probabilistic Models (DDPM)

DDPM is the foundational diffusion architecture:

```python
class DiffusionModel(nn.Module):
    def __init__(self, model, n_steps=1000):
        super().__init__()
        self.model = model  # U-Net typically
        self.n_steps = n_steps
        
        # Noise schedule
        self.beta = torch.linspace(1e-4, 0.02, n_steps)
        self.alpha = 1 - self.beta
        self.alpha_bar = torch.cumprod(self.alpha, dim=0)
    
    def forward_diffusion(self, x_0, t):
        """Add noise to image at timestep t"""
        noise = torch.randn_like(x_0)
        alpha_bar_t = self.alpha_bar[t].view(-1, 1, 1, 1)
        x_t = torch.sqrt(alpha_bar_t) * x_0 + torch.sqrt(1 - alpha_bar_t) * noise
        return x_t, noise
    
    def training_step(self, x_0):
        """Predict the noise that was added"""
        t = torch.randint(0, self.n_steps, (x_0.shape[0],))
        x_t, noise = self.forward_diffusion(x_0, t)
        predicted_noise = self.model(x_t, t)
        return F.mse_loss(predicted_noise, noise)
```

### Score-Based Stochastic Differential Equations (Score SDE)

Score SDE provides a continuous-time formulation of diffusion, enabling more flexible noise schedules and sampling methods.

The "score" is the gradient of the log probability: ∇ₓ log p(x). The model learns to estimate this score at each noise level.

### Latent Diffusion (Stable Diffusion)

Latent diffusion runs the diffusion process in a compressed latent space rather than pixel space, dramatically reducing computational costs:

```
Image → VAE Encoder → Latent → Diffusion Process → Latent → VAE Decoder → Image
```

This is what powers Stable Diffusion, DALL-E 3, and similar models.

**Applications:** Image generation (Midjourney, Stable Diffusion), video generation (Sora), audio synthesis, 3D generation.

**Advantage:** Extremely high-quality outputs with controllable generation through conditioning.

---

## 5. Invertible Flow-Based Models

Flow-based models learn an invertible transformation from a simple distribution (Gaussian) to the data distribution.

### The Core Idea

If you can learn a function f that transforms Gaussian noise z into realistic images x = f(z), AND that function is invertible (you can compute z = f⁻¹(x)), then you can:

1. **Generate:** Sample z ~ N(0,1), compute x = f(z)
2. **Evaluate likelihood:** Compute z = f⁻¹(x), evaluate Gaussian likelihood

### RealNVP

RealNVP uses affine coupling layers that are easy to invert:

```python
class AffineCouplingLayer(nn.Module):
    def __init__(self, dim, hidden_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(dim // 2, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, dim)  # Outputs scale and shift
        )
    
    def forward(self, x, reverse=False):
        x1, x2 = x.chunk(2, dim=-1)
        params = self.net(x1)
        scale, shift = params.chunk(2, dim=-1)
        scale = torch.sigmoid(scale + 2)  # Ensure positive
        
        if not reverse:
            y2 = x2 * scale + shift
            log_det = scale.log().sum(dim=-1)
        else:
            y2 = (x2 - shift) / scale
            log_det = -scale.log().sum(dim=-1)
        
        return torch.cat([x1, y2], dim=-1), log_det
```

### Glow

Glow extends RealNVP with invertible 1x1 convolutions and multi-scale architecture, achieving impressive results on face generation.

### Masked Autoregressive Flow (MAF)

MAF combines flow-based and autoregressive approaches, using autoregressive networks within the flow framework.

**Applications:** Density estimation, anomaly detection, image generation.

**Advantage:** Exact likelihood computation (unlike VAEs and GANs).

**Trade-off:** Architectural constraints required for invertibility can limit expressiveness.

---

## 6. Implicit Density Models (GANs)

Generative Adversarial Networks don't explicitly model probability—they learn to generate samples that fool a discriminator.

### The Core Idea

Train two networks in opposition:

1. **Generator (G):** Creates fake samples from noise
2. **Discriminator (D):** Distinguishes real from fake samples

```python
class Generator(nn.Module):
    def __init__(self, latent_dim, img_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(latent_dim, 256),
            nn.LeakyReLU(0.2),
            nn.Linear(256, 512),
            nn.LeakyReLU(0.2),
            nn.Linear(512, img_dim),
            nn.Tanh()
        )
    
    def forward(self, z):
        return self.net(z)

class Discriminator(nn.Module):
    def __init__(self, img_dim):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(img_dim, 512),
            nn.LeakyReLU(0.2),
            nn.Linear(512, 256),
            nn.LeakyReLU(0.2),
            nn.Linear(256, 1),
            nn.Sigmoid()
        )
    
    def forward(self, x):
        return self.net(x)

# Training loop
def train_step(real_images, generator, discriminator, g_opt, d_opt):
    batch_size = real_images.size(0)
    
    # Train Discriminator
    z = torch.randn(batch_size, latent_dim)
    fake_images = generator(z).detach()
    
    d_real = discriminator(real_images)
    d_fake = discriminator(fake_images)
    
    d_loss = -torch.log(d_real).mean() - torch.log(1 - d_fake).mean()
    d_opt.zero_grad()
    d_loss.backward()
    d_opt.step()
    
    # Train Generator
    z = torch.randn(batch_size, latent_dim)
    fake_images = generator(z)
    d_fake = discriminator(fake_images)
    
    g_loss = -torch.log(d_fake).mean()
    g_opt.zero_grad()
    g_loss.backward()
    g_opt.step()
```

### StyleGAN

StyleGAN revolutionized face generation with its style-based architecture:

1. **Mapping Network:** Transforms latent z into intermediate style w
2. **Synthesis Network:** Uses adaptive instance normalization (AdaIN) to inject styles at each layer
3. **Progressive Growing:** Trains at increasing resolutions

This architecture enables unprecedented control over generated images.

### CycleGAN

CycleGAN enables unpaired image-to-image translation (e.g., horses → zebras) using cycle consistency loss:

```
Horse → Generator A → "Zebra" → Generator B → Reconstructed Horse
```

The model learns that translating horse → zebra → horse should return the original horse.

**Applications:** Image synthesis (faces, art), image-to-image translation, video generation, data augmentation.

**Challenge:** Training instability (mode collapse, vanishing gradients). Extensive research has addressed these issues (Wasserstein GAN, spectral normalization, etc.).

---

## Comparing the Families

| Model Family | Exact Likelihood | Sample Quality | Training Stability | Speed |
|--------------|------------------|----------------|-------------------|-------|
| VAEs | Lower bound | Medium | High | Fast |
| Autoregressive | Exact | High | High | Slow (sequential) |
| Energy-Based | Intractable | Medium | Difficult | Medium |
| Diffusion | Lower bound | Very High | High | Slow (many steps) |
| Flow-Based | Exact | Medium-High | High | Fast |
| GANs | None | Very High | Difficult | Fast |

---

## When to Use Each Family

### Use **VAEs** when:
- You need a meaningful latent space for downstream tasks
- You want to interpolate between data points
- Training stability is paramount

### Use **Autoregressive Models** when:
- Sequential data (text, audio, time series)
- You need exact likelihoods
- Quality matters more than generation speed

### Use **Diffusion Models** when:
- Image/video generation is the goal
- You need controllable generation (text-to-image)
- Maximum quality is the priority

### Use **Flow-Based Models** when:
- Exact density estimation is required
- Anomaly detection is the application
- You need both generation and inference

### Use **GANs** when:
- Real-time generation is needed
- Image-to-image translation
- You have expertise handling training instability

---

## The Future: Hybrid Approaches

The boundaries between families are blurring. Modern systems often combine approaches:

- **Latent Diffusion:** VAE encoder + Diffusion in latent space
- **Consistency Models:** Distill diffusion models into single-step generators
- **Flow Matching:** Combines flow and diffusion perspectives
- **Adversarial Diffusion:** GAN discriminator to improve diffusion samples

The generative AI landscape continues to evolve rapidly, but understanding these foundational architectures provides the framework for understanding new developments.

---

## Conclusion

Generative models are not a monolith—they're a rich ecosystem of approaches, each with distinct mathematical foundations and practical trade-offs.

At **Noble Stack**, this taxonomy guides our technical decisions. Need a chatbot? Autoregressive LLMs. Need image generation? Diffusion models. Need anomaly detection? Flow-based or energy-based models.

Understanding the hierarchy of generative models isn't just about knowing what exists—it's about knowing which tool to reach for when building the next generation of AI-powered products.

---

*Building an AI-powered product and need guidance on the right architecture? [Let's talk](/contact).*
