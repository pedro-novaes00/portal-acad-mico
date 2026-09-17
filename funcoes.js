function verificarSituacao(media) {
 if (media >= 6) {
 return "Aprovado";
 }
 if (media >= 4) {
 return "Recuperação";
 }
 return "Reprovado";
}
