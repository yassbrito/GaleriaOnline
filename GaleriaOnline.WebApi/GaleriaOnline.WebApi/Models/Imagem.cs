﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace GaleriaOnline.WebApi.Models;

public partial class Imagem
{
    [Key]
    public int Id { get; set; }

    [StringLength(255)]
    public string Nome { get; set; } = null!;

    [StringLength(500)]
    public string Caminho { get; set; } = null!;
}
