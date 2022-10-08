$(document).ready(function(){
    console.log('hi')
    $("#overlay").click(function(){
        $("#overlay").hide();
        $("#imgPlaceholder").attr("");
        $("#titlePlaceholder").empty()
        $("#descPlaceholder").empty()
    });

    $("#img1").click(function(){

        $("#imgPlaceholder").attr("src","/static/assets/image20.jpeg").width(700)
        $("#titlePlaceholder").html('Who are Brumen?')
        $("#descPlaceholder").append(`
            <p>
            The Brumen Foundation is a non-profit organisation established in 2003 whose aim is promoting quality design and informing a wider audience of 
            the fact that design is all around us and is a key contributor to our quality of life.</p>
            <p>
            With the Brumen Biennial of Slovenian Design—the central event in the field of design in 
            Slovenia—and the Brumen Awards—the highest national professional recognitions in design—the Brumen Foundation 
            awards excellent Slovenian designers, quality visual communication and clients that recognise design as an important competitive advantage.
            </p>
            `
        )
        $("#overlay").show();
    });


    $("#img2").click(function(){

        $("#imgPlaceholder").attr("src","/static/assets/image6.png").width(400);
        $("#titlePlaceholder").html('Presentation at Indigo Festival')
        $("#descPlaceholder").append(`
            <p>
            This year marks the 10th Brumen Biennal - an overview of the best works in Slovenian visual communications
            As part of the presentation of the catalogue of this year’s Biennial a short talk was organized under 
            Indigo festival at Cukrarna on Thursday, 6.10.2022 at 4:00PM.
            </p>
            `
        )
        $("#overlay").show();
    });

    $("#img3").click(function(){

        $("#imgPlaceholder").attr("src","/static/assets/image21.png").width(300);
        $("#titlePlaceholder").html('Value of quality visual design')
        $("#descPlaceholder").append(`
            <p>
            The talk touched on subjects such as promotion of excellence in design and awarding exceptional projects, their authors and the businesses 
            investing in design. Many tasks of todays field of visual communication were discussed.
             
            </p>

            <p>
            A big portion of presentation was focused on content in the making on Brumens blog, where interviews 
            with winning designers are published which offer a great insight into their thinking, workflow,
            challanges and future potential to uncover. Blog includes an article with this years main award winners -
            <a href = "https://blog.brumen.org/blog/sledilnik-covid-19-prostovoljci-ki-so-namesto-drzave-zbrali-in-oblikovali-podatke-o-epidemiji/">Sledilnik Covid-19.</a>
            </p>
            `
        )
        $("#overlay").show();
    });

    $("#img4").click(function(){
        $("#imgPlaceholder").attr("src","/static/assets/image9.png").width(500);
        $("#titlePlaceholder").html('Venue for thoughts')
        $("#descPlaceholder").append(`
            <p>
            Festival Indigo and catalogue presentation were held at Cukrarna - venue for exhibiting contemporary art 
            and as a place where thoughts can be explored and contemporary art projects of all kinds – visual, intermedia, performance, sound, music and more
            </p>
            `
        )
        $("#overlay").show();
    });

    $("#img5").click(function(){
        $("#imgPlaceholder").attr("src","/static/assets/image24.png").width(500);
        $("#titlePlaceholder").html('Reaching an audience')
        $("#descPlaceholder").append(`
            <p>
            With the increasing availability of design tools, the field of design has become deprofessionalised, 
            financially devalued and increasingly less respected and understood 
            by clients and the wider public.
            </p>
            <p>
            This year, editors of Brumen catalogue decided to adapt strategy "digital first".
            Reasons for that are the massivly wider reach - publishing interviews on social media
            has a bigger impact than publishing interviews in catalogue with only 300 copies.

            Their content is now easily accessible online and presents a rarity in design content drought in media.
            You can find news on their latest activities on the website, in our newsletter, as well as on Facebook, Instagram and Twitter.
            </p>
            `
        )
        $("#overlay").show();
    });

    $("#img6").click(function(){
        $("#imgPlaceholder").attr("src","/static/assets/image11.jpeg").width(500);
        $("#titlePlaceholder").html('Exhibition Catalogue')
        $("#descPlaceholder").append(`
            <p>
            Every one of the Brumen Foundation’s exhibitions is accompanied by a catalogue that visually presents the 
            exhibited works. The forewords and other accompanying text offer further insight into the works of authors, 
            the festivals or the biennial.
            </p>
            <p>
            This year, 15 awards were presented in the catalogue:
            22. Festival dokumentarnega filma,
            #stayinside,
            VOJTEH,
            Skupno v skupnosti, 
            Brutalj,
            Matter-HAOS,
            Celtra,
            Heroes,
            Persona,
            Pika Nogavička - interactive book,
            steirischer herbst ‘21,
            Papercast,
            Zbirka Prišleki,
            There Is No Society?,
            Univerza Sans and Sledilnik covid-19
            </p>
            `
        )
        $("#overlay").show();
    });

    $("#img8").click(function(){
        $("#imgPlaceholder").attr("src","/static/assets/image25.jpeg").width(400);
        $("#titlePlaceholder").html('First Brumen Lifetime Achievement Award')
        $("#descPlaceholder").append(`
            <p>
            Peter Skalar, whose works with their cultivated artistic language express an intellectual breadth 
            that also enriches us, is the first recipient of the brumen award for lifetime achievement. 
            The award will be presented to him as part of the 10th Brumen Biennale of Slovenian Design.

            
            </p>
            <p>
            Born in 1941, is one of the most important names in graphic design and visual communication in Slovenia,
            one of the co-founders of the Brumen Foundation and for many years its leader as well as the leader of the Brumen Biennale.
            </p>

            <a href = "https://www.rtvslo.si/kultura/arhitektura-in-oblikovanje/prvikrat-podeljena-nagrada-brumen-za-zivljenjsko-delo-v-roke-oblikovalca-petra-skalarja/618747">More about Peter Skalar...</a>
            `
        )
        $("#overlay").show();
    });

    $("#about").click(function(){
        $("#imgPlaceholder").attr("src","")
        $("#titlePlaceholder").html('About')
        $("#descPlaceholder").append(`
            <p>
            This page is a project report for the Visual Communication Design subject at Faculty of electrical engineering, University of Ljubljana. Made by Tim Križnik.
            `
        )
        $("#overlay").show();
    });
});
