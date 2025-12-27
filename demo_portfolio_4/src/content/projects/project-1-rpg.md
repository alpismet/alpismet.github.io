---
title:
  en: "Neon Cyber RPG"
  tr: "Neon Cyber RPG"
description:
  en: "A cyberpunk-themed isometric RPG built in Unity with custom shaders and dynamic lighting."
  tr: "Unity ile geliştirilmiş, cyberpunk temalı izometrik bir RPG oyunu. Özel shader sistemi ve dinamik ışıklandırma içerir."
publishDate: 2024-11-15
tags: ["Unity", "C#", "Shader Graph", "RPG"]
image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop"
gallery:
  - "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop"
videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U"
featured: true
githubUrl: "https://github.com/gmdpopper/neon-cyber-rpg"
demoUrl: "https://itch.io/gmdpopper/neon-cyber-rpg"
---

<h1>
  <i18n lang="en" data-i18n="rpg-title">Neon Cyber RPG</i18n>
  <i18n lang="tr" hidden data-i18n="rpg-title">Neon Cyber RPG</i18n>
</h1>

<p>
  <i18n lang="en" data-i18n="rpg-body-1">
    This project was designed to push the limits of a modern game engine. It's
    one of the most complex works in my Astro portfolio.
  </i18n>
  <i18n lang="tr" hidden data-i18n="rpg-body-1">
    Bu proje, modern bir oyun motorunun sınırlarını zorlamak için tasarlandı.
    Astro portfolyomda sergilediğim en karmaşık çalışmalardan biri.
  </i18n>
</p>

<h2>
  <i18n lang="en" data-i18n="rpg-features-title">Features</i18n>
  <i18n lang="tr" hidden data-i18n="rpg-features-title">Özellikler</i18n>
</h2>

<ul>
  <li>
    <i18n lang="en" data-i18n="rpg-feature-1">
      <strong>Dynamic Lighting:</strong> Real-time lighting calculations.
    </i18n>
    <i18n lang="tr" hidden data-i18n="rpg-feature-1">
      <strong>Dinamik Işıklandırma:</strong> Gerçek zamanlı ışık hesaplamaları.
    </i18n>
  </li>
  <li>
    <i18n lang="en" data-i18n="rpg-feature-2">
      <strong>Inventory System:</strong> A robust drag-and-drop inventory.
    </i18n>
    <i18n lang="tr" hidden data-i18n="rpg-feature-2">
      <strong>Envanter Sistemi:</strong> Sürükle-bırak destekli kapsamlı
      envanter.
    </i18n>
  </li>
  <li>
    <i18n lang="en" data-i18n="rpg-feature-3">
      <strong>AI:</strong> Enemy AI built with behavior trees.
    </i18n>
    <i18n lang="tr" hidden data-i18n="rpg-feature-3">
      <strong>Yapay Zeka:</strong> Davranış ağaçları (Behavior Trees)
      kullanılarak kodlanmış düşman yapay zekası.
    </i18n>
  </li>
</ul>

<h2>
  <i18n lang="en" data-i18n="rpg-code-title">Code Review</i18n>
  <i18n lang="tr" hidden data-i18n="rpg-code-title">Kod İncelemesi</i18n>
</h2>

<p>
  <i18n lang="en" data-i18n="rpg-body-2">
    The following C# snippet includes the core movement logic for the player
    controller. You can see Astro's syntax highlighting at work here.
  </i18n>
  <i18n lang="tr" hidden data-i18n="rpg-body-2">
    Aşağıdaki C# kodu, karakter kontrolcüsünün temel hareket mantığını içerir.
    Astro'nun sözdizimi vurgulama (syntax highlighting) yeteneğini burada
    görebilirsiniz.
  </i18n>
</p>

```csharp
public class PlayerController : MonoBehaviour
{
    [SerializeField] private float moveSpeed = 5f;
    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void FixedUpdate()
    {
        float x = Input.GetAxisRaw("Horizontal");
        float z = Input.GetAxisRaw("Vertical");
        
        Vector3 movement = new Vector3(x, 0, z).normalized;
        rb.velocity = movement * moveSpeed;
    }
}
```

<p>
  <i18n lang="en" data-i18n="rpg-body-3">
    This project reflects my passion for game development.
  </i18n>
  <i18n lang="tr" hidden data-i18n="rpg-body-3">
    Bu proje, benim oyun geliştirme tutkumun bir yansımasıdır.
  </i18n>
</p>
