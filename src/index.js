import Phaser from './phaser-full';
import {opengmail} from './opengmail'
import {openlinkedin} from './linkedin'
import {github} from './github'
class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.style = {  fill: '#00FFFF' };
        this.styleOver = { fill: '#FF00FF' };
        this.load.image('block', 'assets/logo.png');
        this.load.image('face','assets/face.jpg');
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        this.load.image('linkedin','assets/linkedin.png')
        this.load.image('git','assets/git.png')
        this.load.image('cpp','assets/cpp.png')
        this.load.image('js','assets/js.png')
        this.load.image('python','assets/python.png')
        this.load.image('node','assets/node.png')
        this.load.image('react','assets/react.png')
        this.load.image('html','assets/html.png')
        this.load.image('css','assets/css.png')
        this.load.image('phaser','assets/phaser.png')
        this.load.image('sql','assets/sql.png')
        this.load.image('mongodb','assets/mongodb.png')
        this.load.image('yoda','assets/yoda.png')
        this.load.image('ast1','assets/asteroid.png')
        this.load.image('ast2','assets/ast2.png')
        this.load.image('galaxy','assets/galaxy.png')
        this.load.image('django','assets/django.png')
        this.load.image('express','assets/express.png')

        }

    create ()
    {
        this.hsv = Phaser.Display.Color.HSVColorWheel();
        const gl = this.sys.game.renderer.gl;
        const renderer = this.sys.game.renderer;
        const modeIndex = renderer.addBlendMode([ gl.ZERO, gl.SRC_COLOR ], gl.FUNC_ADD);
        const graphics = this.add.graphics();
        const color = 0xffffff;
        const alpha = 1;
        graphics.fillStyle(color, alpha);
        graphics.fillCircle(window.innerWidth*(.50), 400, 100).setAlpha(.9);
        var face=this.add.image(window.innerWidth*(.50), 400,'face').setScale(.10).setBlendMode(modeIndex);
        face.setOrigin(.5);
        this.linkedin = this.add.image(window.innerWidth*(.46),604,'linkedin').setScale(.20)
        this.linkedin.setInteractive({cursor: './assets/cursor.png, pointer'})
        this.linkedin.on('pointerup',openlinkedin,this);
        this.linkedin.on('pointerover',(event)=>{
            this.linkedin.setScale(.25);
        })
        this.linkedin.on('pointerout', (event) => {
            this.linkedin.setScale(.20);
        });
        var git = this.add.image(window.innerWidth*(.58 ),604,'git').setScale(0.06)
        git.setInteractive()
        git.on('pointerup',() => {github('https://github.com/Kanishak11')},this);
        git.on('pointerover', (event)=>{
            git.setScale(0.08);
        })
        git.on('pointerout', (event) => {
            git.setScale(0.06);
        });
        //text1
        this.text1 = this.add.text(window.innerWidth*(.50),100, "Kanishak Mahendiratta ", { font: "74px Arial Black", fill: "#fff" }).setOrigin(.5);
        this.text1.setStroke('#00f', 16);
        this.text1.setShadow(2, 2, "#333333", 2, true, true);
        //text2
        this.text2 = this.add.text(window.innerWidth*(.50), 200, "Full Stack Developer ", { font: "74px Arial Black", fill: "#fff" }).setOrigin(.5);
        this.text2.setStroke('#00f', 16);
        this.text2.setShadow(2, 2, "#333333", 2, true, true);
        //text3
        var text3 = this.add.text(window.innerWidth*(.50), 550, "kanukmr0@gmail.com | 9896032705", { fontFamily: 'Nosifer' ,font: "36px Nosifer", fill: "#FFA500" }).setOrigin(.5);
        text3.setInteractive({ cursor: './assets/cursor.png, pointer'});
        text3.on('pointerup', opengmail, this);
        text3.on('pointerover', function (event) {
            this.setTint(0xff0000);
        });
    
        text3.on('pointerout', function (event) {
            this.clearTint();
        });
        //text4 Education
        var text4 = this.add.text(window.innerWidth*(.5), 800, "Eduction", { font: "74px Arial Black", fill: "#fff" }).setOrigin(.5);
        text4.setStroke('#00f', 16);
        text4.setShadow(2, 2, "#333333", 2, true, true);
        var text5 = this.add.text(window.innerWidth*(.5), 920, "B.Tech (EE)", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 970, "National Institute Of Technology ,Kurukshetra", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1020, "(2017-2021)", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1070, "CGPA - 7.5", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1150, "12th CBSE", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1200, "(2015-2016)", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1240, "Percentage - 87%", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1320, "10th CBSE", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1370, "(2013-2014)", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1410, "CGPA - 9.2", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
          // yoda
        
        this.yoda=this.add.sprite(window.innerWidth*(.15),1300,'yoda').setScale(.35)
        // experiance
        this.text6 = this.add.text(window.innerWidth*(.5),1650, "Experiance", { font: "74px Arial Black", fill: "#fff" }).setOrigin(.5);
        this.text6.setStroke('#00f', 16);
        this.text6.setShadow(2, 2, "#333333", 2, true, true);
        this.add.text(window.innerWidth*(.5), 1750, "FrontEnd Developer at Times Internet - (Present)", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1860, "Full Stack Developer at CRIS (2019-2020)", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1900, "Created RESTful api's using Django Rest framework,Used ajax and jquery for transmitting", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1940, "json data objects between frontend and controller.Worked on front end framework such as", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 1980, "bootstrap for responsive frontend and PostgreSql as a database.", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        // asteroid
        
        this.ast=this.physics.add.sprite(20,2000,'ast2'); 
        this.ast.setAlpha(.55)  
        //galaxy
        this.galaxy=this.add.sprite(window.innerWidth*(.5),3550,'galaxy')
        this.galaxy.setAlpha(0.8)
        this.galaxy.setScale(1.85)
        //skills
        this.text7=this.add.text(window.innerWidth*(.5), 2120, "Skills", { font: "74px Arial Black", fill: "#fff" }).setOrigin(.5);
        this.text7.setStroke('#00f', 16);
        this.text7.setShadow(2, 2, "#333333", 2, true, true);
        this.add.text(window.innerWidth*(.5), 2170, "(Always ready to learn more) ", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 2220, "Language", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        var cpp=this.add.image(window.innerWidth*(.5)-window.innerWidth*(.15),2300,'cpp').setOrigin(.5);
        cpp.setScale(0.08)
        var js=this.add.image(window.innerWidth*(.5),2300,'js').setOrigin(.5);
        js.setScale(0.10)
        var python=this.add.image(window.innerWidth*(.5)+window.innerWidth*(.15),2300,'python').setOrigin(.5);
        python.setScale(0.08)
        //skills-->tools
        this.add.text(window.innerWidth*(.5), 2400, "Tools", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        var node=this.add.image(window.innerWidth*(.5)-window.innerWidth*(.25),2480,'node').setOrigin(.5);
        node.setScale(0.08)
        var react=this.add.image(window.innerWidth*(.5)-window.innerWidth*(.125),2480,'react').setOrigin(.5);
        react.setScale(0.08)
        var phaser=this.add.image(window.innerWidth*(.5),2480,'phaser').setOrigin(.5);
        phaser.setScale(0.08)
        var express=this.add.image(window.innerWidth*(.5)+window.innerWidth*(.125),2480,'express').setOrigin(.5);
        express.setScale(0.07)
        var django=this.add.image(window.innerWidth*(.5)+window.innerWidth*(.250),2480,'django').setOrigin(.5);
        django.setScale(0.08)
        //database
        this.add.text(window.innerWidth*(.5), 2560, "Databases", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        var sql=this.add.image(window.innerWidth*(.5)-window.innerWidth*(.08),2660,'sql').setOrigin(.5);
        sql.setScale(.08)
        var MongoDb=this.add.image(window.innerWidth*(.5)+window.innerWidth*(.08),2660,'mongodb').setOrigin(.5);
        MongoDb.setScale(0.08)
        this.add.text(window.innerWidth*(.5), 2760, "Others", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5);
        var html=this.add.image(window.innerWidth*(.5)-window.innerWidth*(.08),2850,'html').setOrigin(.5);
        html.setScale(.12);
        var css=this.add.image(window.innerWidth*(.5)+window.innerWidth*(.08),2850,'css').setOrigin(.5);
        css.setScale(0.08);
    


        //projects
        this.text8 = this.add.text(window.innerWidth*(.5),3050, "Projects", { font: "74px Arial Black", fill: "#fff" }).setOrigin(.5);
        this.text8.setStroke('#00f', 16);
        this.text8.setShadow(2, 2, "#333333", 2, true, true);
        this.add.text(window.innerWidth*(.5), 3150, "MyLibrary", { fontFamily: 'Nosifer' ,font: "40px Nosifer" ,color :"orange" , textDecoration:"underline"}).setOrigin(.5).setInteractive({cursor: './assets/cursor.png, pointer'}).on('pointerdown',()=>{ github('https://github.com/Kanishak11/MyLibrary')},this)
        this.add.text(window.innerWidth*(.5), 3210, "Created a Web application called 'MyLibrary' which shows all the books in my library. We can ", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 3250, "search , add ,delete or update the books.Implemented using Node.js, Express, and MongoDB ", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        //pro-> space invader
        this.add.text(window.innerWidth*(.5), 3340, "Space Invader", { fontFamily: 'Nosifer' ,font: "40px Nosifer"}).setOrigin(.5).setInteractive({cursor: './assets/cursor.png, pointer'});
        this.add.text(window.innerWidth*(.5), 3390, "It is a fun game where we need to save earth by shooting against aliens", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 3430, "Implemented using pure html ,javascript and css", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        // pro ->toss a coin 
        this.add.text(window.innerWidth*(.5), 3520, "Food Ordering", { fontFamily: 'Nosifer' ,font: "40px Nosifer",color :"orange"}).setOrigin(.5).setInteractive({cursor: './assets/cursor.png, pointer'}).on('pointerdown',()=>{github('https://github.com/Kanishak11/food-app-main')},this)
        this.add.text(window.innerWidth*(.5), 3570, "Food-Ordering app lets customer order food from multiple restaurants . Customers can ", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        this.add.text(window.innerWidth*(.5), 3620, " add or remove food from cart and order the food.", { fontFamily: 'Nosifer' ,font: "36px Nosifer"}).setOrigin(.5);
        

        //game camera actions
        this.cameras.main.setBounds(0, 0, 700 * 2.12, 700 * 5.5);
        this.physics.world.setBounds(0, 0, 700 * 2.12, 700 * 5.5);

        // keyboard controls

        this.cursors = this.input.keyboard.createCursorKeys();
        // adding physics to player
        this.player = this.physics.add.sprite(400, 400, 'block');
        this.player.setScale(.3)
        this.player.body.drag.set(52);
        this.player.setCollideWorldBounds(true);
        //follow the player
        this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
     
    }

    update ()
    {

        this.player.angle+=this.player.angle>0?-.5:.5
        this.player.setVelocityX(3);
        this.player.setVelocityY(10);
        if(this.player.y >= 450 && this.player.y<=1000){
            this.player.setVelocityY(150)
        }
        if(this.player.y >= 1100 && this.player.y<=1600 && this.player.body.velocity.y>0){
            this.player.setVelocityY(150)
            this.player.angle=this.player.x<600?this.player.angle+8:this.player.angle;    
            this.ast.setVelocityX(16)    
        }
        if(this.player.y>1800 && this.player.y<=2400){
            this.player.setVelocityY(150)
        }
        if(this.player.y>2650 && this.player.y<=3300){
            this.player.setVelocityY(150)
        }
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-500);
            this.player.angle--;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(500);
            this.player.angle++;
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-500);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(500);
        }
    }
}
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    fps: {target: 60},
    parent:'main',
    backgroundColor: 0,
    transparent: true,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        enableBody: true,
  
      }
    },
    scene: [Example]
  };
  
  const game = new Phaser.Game(config);
