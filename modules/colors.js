const colors = {};

    // ESCAPE CODES
    
    colors.ESCAPE = "\x1B[%dm";
         
    // Color Code (Foreground)
         
    colors.FG_BLACK = 30, 
    colors.FG_RED = 31, 
    colors.FG_GREEN = 32,
    colors.FG_YELLOW = 33, 
    colors.FG_BLUE = 34,
    colors.FG_MAGENTA = 35,
    colors.FG_CYAN = 36, 
    colors.FG_WHITE = 37, // This is actually light grey for some reason but idc.
     
    colors.FG_DARK_GRAY = 90, 
    colors.FG_LIGHT_RED = 91, 
    colors.FG_LIGHT_GREEN = 92, 
    colors.FG_LIGHT_YELLOW = 93, 
    colors.FG_LIGHT_BLUE = 94, 
    colors.FG_LIGHT_MAGENTA = 95, 
    colors.FG_LIGHT_CYAN = 96, 
    //colors.FG_WHITE = 97,
    
    colors.FG_DEFAULT = 39,
         
    // Color Codes (Background)
                
    colors.BG_RED = 41, 
    colors.BG_GREEN = 42, 
    colors.BG_BLUE = 44,
    colors.BG_WHITE = 47,
          
    colors.BG_DEFAULT = 49,
         
    // Color Codes (Sets & Unsets)
          
    colors.RESET = 0,
    colors.BOLD_BRIGHT = 1,
    colors.UNDERLINE = 4,
    colors.INVERSE = 7,
    colors.BOLD_BRIGHT_OFF = 21,
    colors.UNERLINE_OFF = 24,
    colors.INVERSE_OFF = 27
    
module.exports = colors;