---
title: "Neon Cyber RPG"
description: "Unity ile geliştirilmiş, cyberpunk temalı izometrik bir RPG oyunu. Özel shader sistemi ve dinamik ışıklandırma içerir."
publishDate: 2024-11-15
tags: ["Unity", "C#", "Shader Graph", "RPG"]
image: "/images/cyber-rpg.jpg"
featured: true
githubUrl: "https://github.com/gmdpopper/neon-cyber-rpg"
demoUrl: "https://itch.io/gmdpopper/neon-cyber-rpg"
---

# Neon Cyber RPG

Bu proje, modern bir oyun motorunun sınırlarını zorlamak için tasarlandı. Astro portfolyomda sergilediğim en karmaşık çalışmalardan biri.

## Özellikler

- **Dinamik Işıklandırma**: Gerçek zamanlı ışık hesaplamaları.
- **Envanter Sistemi**: Sürükle-bırak destekli kapsamlı envanter.
- **Yapay Zeka**: Davranış ağaçları (Behavior Trees) kullanılarak kodlanmış düşman yapay zekası.

## Kod İncelemesi

Aşağıdaki C# kodu, karakter kontrolcüsünün temel hareket mantığını içerir. Astro'nun sözdizimi vurgulama (syntax highlighting) yeteneğini burada görebilirsiniz.

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

Bu proje, benim oyun geliştirme tutkumun bir yansımasıdır.
