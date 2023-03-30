 // 헤더 음악 변경
 let music_title_name=['에버랜드 테마송 Ver.1(Close Your Eyes and Think of The Happiest Moment',
 '에버랜드 테마송 Ver.2(You’ve Been Invited)','크리스마스 테마송(2021 day ver)'];
 let music_title_src=['https://wwwcdn.everland.com/web/images/front/everland/swf/assets/mp3/03_Close_your_eyes_and_think_of_the_happiest_moment_Korean.mp3',
 'https://wwwcdn.everland.com/web/images/front/everland/swf/assets/mp3/04_Youve_been_invited.mp3',
 'https://wwwcdn.everland.com/web/images/front/everland/swf/assets/mp3/Christmas_Theme_Song_(Day).mp3']
 let music_title = $('.music_title');
 let next_music= $('i.fa-forward');
 let music = $('audio source');
 let current_song_index = 0; // 현재 재생 중인 곡의 인덱스를 저장하는 변수
 setTimeout(function () {
    music_title.text(music_title_name[0]);
 },3000)
 next_music.click(function() {
     if(music_title.text().indexOf('테마송') >-1){
         current_song_index = (current_song_index + 1) % music_title_name.length; // 다음 곡의 인덱스 계산
         music_title.text(music_title_name[current_song_index]); // 곡 제목 변경
         music.attr('src', music_title_src[current_song_index]); // 곡 소스 변경
         $('audio')[0].load(); // 오디오 로드
         $('audio')[0].play(); // 오디오 재생
     }else{
         music_title.text(music_title_name[1]);
         music.attr('src', music_title_src[1]);
         current_song_index=1;
         $('audio')[0].load(); // 오디오 로드
         $('audio')[0].play();// 오디오 재생
     }
 }); 