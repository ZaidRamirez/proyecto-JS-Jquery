'use strict'
    //selector de tema
    let changeTheme = $('#theme');
    let localTheme = localStorage.getItem('theme');
    if (localTheme==null){
      localStorage.setItem('theme','green');
      localTheme = localStorage.getItem('theme');
    }
  
    if ( localTheme== 'green'){
      changeTheme.attr("href", "css/green.css");
    }else if (localTheme== 'red'){
      changeTheme.attr("href", "css/red.css");
    }else if (localTheme== 'blue'){
      changeTheme.attr("href", "css/blue.css");
    }
  
    console.log(localTheme);
  
  
    $('#to-green').click(()=>{
      changeTheme.attr("href", "css/green.css");
      localStorage.setItem('theme','green');
    });
  
    $('#to-red').click(()=>{
      changeTheme.attr("href", "css/red.css");
      localStorage.setItem('theme','red');
    });
    
    $('#to-blue').click(()=>{
      changeTheme.attr("href", "css/blue.css");
      localStorage.setItem('theme','blue');
    });
  //slider 
  if(window.location.href.indexOf('index') > -1) {
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 600,
          responsive: true
        });
      });

  //Posts

  let posts = [
    {
      title: 'Prueba 1',
      date: 'Fecha de publicación ' + moment().format('l') ,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare augue cursus, porttitor ligula ut, vestibulum turpis. Donec vel malesuada nisi. Integer malesuada erat a sagittis lobortis. Nulla dignissim cursus eros vel sagittis. Proin ultricies vulputate sapien, eget tempus erat faucibus ac.'
    },
    {
      title: 'Prueba 2',
      date: 'Fecha de publicación ' + moment().format('l') ,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare augue cursus, porttitor ligula ut, vestibulum turpis. Donec vel malesuada nisi. Integer malesuada erat a sagittis lobortis. Nulla dignissim cursus eros vel sagittis. Proin ultricies vulputate sapien, eget tempus erat faucibus ac."
    },
    {
      title: 'Prueba 3',
      date: 'Fecha de publicación ' + moment().format('l') ,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare augue cursus, porttitor ligula ut, vestibulum turpis. Donec vel malesuada nisi. Integer malesuada erat a sagittis lobortis. Nulla dignissim cursus eros vel sagittis. Proin ultricies vulputate sapien, eget tempus erat faucibus ac."
    },
    {
      title: 'Prueba 4',
      date: 'Fecha de publicación ' + moment().format('l') ,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare augue cursus, porttitor ligula ut, vestibulum turpis. Donec vel malesuada nisi. Integer malesuada erat a sagittis lobortis. Nulla dignissim cursus eros vel sagittis. Proin ultricies vulputate sapien, eget tempus erat faucibus ac."
    },
    {
      title: 'Prueba 5',
      date: 'Fecha de publicación ' + moment().format('l') ,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare augue cursus, porttitor ligula ut, vestibulum turpis. Donec vel malesuada nisi. Integer malesuada erat a sagittis lobortis. Nulla dignissim cursus eros vel sagittis. Proin ultricies vulputate sapien, eget tempus erat faucibus ac."
    }
  ];

  posts.forEach((item) => {
    let post = `
    <article class="post">
      <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
          ${item.content}
        </p>
      <a href="#" class="button-more">Leer más</a>
    </article>` ;
    $('#posts').append(post);
  });
};
  //scroll arriba de la web
  let btnSubir = $("#subir");

  btnSubir.click(()=>{
    $("html, body").animate({
      scrollTop: 0
    },500);
  })

  //login falso
  $("#login form").submit(()=>{
    var formName = $("#form_name").val();
    localStorage.setItem("formName", formName);
  });

  let formName = localStorage.getItem("formName");
  if(formName != null){
    let about =$("#about p");
    about.html(`Bienvenido ${formName}`);
    about.append("<br><a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();

    $("#logout").click(()=>{
      localStorage.removeItem("formName");
      location.reload();
    })
  }

  if(window.location.href.indexOf('reloj') > -1) {
    setInterval(()=>{
      let reloj = moment().format("hh:mm:ss");
      $("#reloj").html(reloj);
    },500)
    
  }

  //validación
  if(window.location.href.indexOf('contact') > -1) {
    $.validate({lang: 'es'});
  }