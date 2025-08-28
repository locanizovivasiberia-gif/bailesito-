#background-video {
  position: absolute;
  top:0; left:0;
  width:100%; height:100%;
  object-fit: cover;      /* Video ocupa toda la pantalla */
  opacity:0;              /* Inicia invisible, luego JS lo hace visible */
  z-index:0;
  transition: opacity 100s ease-in-out;
}


