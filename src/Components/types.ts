export interface IPhoto{
        
  alt_description?: string;
  blur_hash:string;
  categories?:Array<any>;
  color:string;
  created_at:string;
  current_user_collections:Array<any>;
  description?: string;
  height:number;
  width:number;
  id:string;
  liked_by_user:boolean;
  likes:number;
  links:{
      self:string;
      html:string;
      download:string;
      download_location:string;
  },
  promoted_at:string;
  sponsorship?:string;
  updated_at:string;
  urls:{
      raw:string;
      full:string;
      regular:string;
      small:string;
      thumb:string;
  },
  user:{
      accepted_tos:boolean;
      bio:string;
      first_name:string;
      id:string;
      instagram_username:string;
      last_name:string;
      links:{
          followers:string;
          following:string
          self:string;
          html:string;
          photos:string;
          likes:string;
          portfolio:string;
      }
      location:string;
      name:string;
      portfolio_url:string;
      profile_image:{
          large:string;
          medium:string;
          small:string;
      }
      total_collections:number;
      total_likes:number;
      total_photos:number;
      twitter_username:string;
      updated_at:string;
      username:string;
  },
  
}

export interface IHandleProps{
    regular:string;
    width:number;
    height:number;
    link:string;
    description?:string;
    alt_description?:string;
    profileImg:string;
    profileLink:string;
    name:string;
    insta:string;
}