 
    var interface1 = new Cmd({
      selector: '#cmd1',
      dark_css: 'dist/cmd_dark.min.css',
      light_css: 'dist/cmd_light.min.css',
      history_id: 'interface1',
      tabcomplete_url: 'tabcomplete.json',
      remote_cmd_list_url: 'commands.json',
      typewriter_time: 5,
      external_processor: function(input, cmd)  {
        if (input === 'test') {
          setTimeout(function() {
            cmd.handleResponse({
              cmd_in: input,
              cmd_out: 'Success!'
            });
          }, 1000);

          return true;
        } else if (input === 'foo') {
          return 'String style return.';
        } else if (input === 'text')  {
          return 'This is normal text. This is <em>italic</em> text. This is <em>bold</em> text.';
        } else if (input === 'bar') {
          return {
            cmd_in: input,
            cmd_out: 'Object style return.'
          };
        } else if (input === 'long') {
          return 'This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. This is a really long output. '
        } else if (input === 'whoami'){
        return 'I am Zemnl '
        }else if (input === 'credits'){
            return 'You can find this HTML5 terminal <a style="color:#55D964" target="_blank" href="https://github.com/mrchimp/cmd">here</a>'
        } else if (input=== 'social') {return{
            cmd_in: 'Social links',
            cmd_out: '<a href="http://www.twitter.com/zemnl" target="_blank">zemnl\@twitter.com</a></br><a href="http://www.twitter.com/zemnl">google</a>' }
        }  else if (input.slice(0,4) ==='echo'){
            return{
        cmd_in: input,
        cmd_out: input.slice(5)}
        } else if (input === 'help'){return{
        cmd_in: 'man zemnl',
        cmd_out: 'Available commands are:</br><a href="#" onclick="cmdhelp(\'whoami\');">whoami</a>, <a href="#" onclick="cmdhelp(\'social\');">social</a>, <a href="#" onclick="cmdhelp(\'credits\');">credits</a>'}}

      }
            });
    
        
function cmdhelp(cmd){
        switch(cmd){
            case 'help':
                interface1.handleInput('help');
                return false;
            case 'credits':
                interface1.handleInput('credits');
                return false;
            case 'social':
                interface1.handleInput('social');
                return false;
            case 'whoami':
                interface1.handleInput('whoami');
                return false;
        }
    }


    // Customise the prompt string (PS1)
    interface1.setPrompt('» ');
    // Run an arbitrary command string
    //$('#whoami').click(function(){  interface1.handleInput('whoami'); return false; });

