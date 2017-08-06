module Blog
    class PostsController < BlogController

        # GET /posts
        # GET /posts.json
        def index
            @posts = storage.list_for(params[:page], params[:tag]).no_news
        end

        # GET /posts/1
        # GET /posts/1.json
        def show
            @post = storage.friendly.find(params[:id])
        end

        # get posts with news tag
        def news
            @news = storage.list_for(params[:page], "News")
        end

        private

        def storage
          Post.published
        end

    end
end
