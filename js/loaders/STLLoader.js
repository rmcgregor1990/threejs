




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>three.js/examples/js/loaders/STLLoader.js at master · mrdoob/three.js · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mrdoob/three.js" name="twitter:title" /><meta content="three.js - JavaScript 3D library." name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/97088?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/97088?s=400" property="og:image" /><meta content="mrdoob/three.js" property="og:title" /><meta content="https://github.com/mrdoob/three.js" property="og:url" /><meta content="three.js - JavaScript 3D library." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="521BEE89:512E:4BF6CEE:539315AD" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="o4BW9eFmX1HLlKK0wYb6qSekgAxYUDJBBPeEovSKEUiPCe5FnVB6vEFyquvPixh8FneEKREwlsbA9rmAOhdG5g==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-1aeb426322c64c12b92d56bda5b110fc1093f75e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-b2cccfcac1a522b6ce675606f61388d36bf2c080.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="6b9e40027b6fe719e1c3d0a9180a2d6a">

      
  <meta name="description" content="three.js - JavaScript 3D library." />

  <meta content="97088" name="octolytics-dimension-user_id" /><meta content="mrdoob" name="octolytics-dimension-user_login" /><meta content="576201" name="octolytics-dimension-repository_id" /><meta content="mrdoob/three.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="576201" name="octolytics-dimension-repository_network_root_id" /><meta content="mrdoob/three.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/mrdoob/three.js/commits/master.atom" rel="alternate" title="Recent Commits to three.js:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fmrdoob%2Fthree.js%2Fblob%2Fmaster%2Fexamples%2Fjs%2Floaders%2FSTLLoader.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="mrdoob/three.js"
      data-branch="master"
      data-sha="ff796a57a584ec8aab1f4d24b82b1f98493bc3fd"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="mrdoob/three.js" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fmrdoob%2Fthree.js"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/mrdoob/three.js/stargazers">
      15,380
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fmrdoob%2Fthree.js"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>Fork
      </a>
      <a href="/mrdoob/three.js/network" class="social-count">
        4,074
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/mrdoob" class="url fn" itemprop="url" rel="author"><span itemprop="title">mrdoob</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/mrdoob/three.js" class="js-current-repository js-repo-home-link">three.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/mrdoob/three.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mrdoob/three.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/mrdoob/three.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /mrdoob/three.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>451</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/mrdoob/three.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /mrdoob/three.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>60</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/mrdoob/three.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /mrdoob/three.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/mrdoob/three.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /mrdoob/three.js/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/mrdoob/three.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /mrdoob/three.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/mrdoob/three.js/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /mrdoob/three.js/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mrdoob/three.js.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mrdoob/three.js.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/mrdoob/three.js" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mrdoob/three.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save mrdoob/three.js to your computer and use it in GitHub Desktop." aria-label="Save mrdoob/three.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/mrdoob/three.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download mrdoob/three.js as a zip file"
                   title="Download mrdoob/three.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/mrdoob/three.js/blob/d3cb4e7cfb6b917c1e4f60856c71775d632067d9/examples/js/loaders/STLLoader.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cfa07c1e5dc101979c35e92824e01ce5 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/mrdoob/three.js/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/blob/dev/examples/js/loaders/STLLoader.js"
                 data-name="dev"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="dev">dev</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/blob/gh-pages/examples/js/loaders/STLLoader.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/blob/master/examples/js/loaders/STLLoader.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r67/examples/js/loaders/STLLoader.js"
                 data-name="r67"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r67">r67</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r66/examples/js/loaders/STLLoader.js"
                 data-name="r66"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r66">r66</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r65/examples/js/loaders/STLLoader.js"
                 data-name="r65"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r65">r65</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r64/examples/js/loaders/STLLoader.js"
                 data-name="r64"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r64">r64</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r63/examples/js/loaders/STLLoader.js"
                 data-name="r63"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r63">r63</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r62/examples/js/loaders/STLLoader.js"
                 data-name="r62"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r62">r62</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r61/examples/js/loaders/STLLoader.js"
                 data-name="r61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r61">r61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r60/examples/js/loaders/STLLoader.js"
                 data-name="r60"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r60">r60</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r59/examples/js/loaders/STLLoader.js"
                 data-name="r59"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r59">r59</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r58/examples/js/loaders/STLLoader.js"
                 data-name="r58"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r58">r58</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r57/examples/js/loaders/STLLoader.js"
                 data-name="r57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r57">r57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r56/examples/js/loaders/STLLoader.js"
                 data-name="r56"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r56">r56</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r55/examples/js/loaders/STLLoader.js"
                 data-name="r55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r55">r55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r54/examples/js/loaders/STLLoader.js"
                 data-name="r54"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r54">r54</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r53/examples/js/loaders/STLLoader.js"
                 data-name="r53"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r53">r53</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r52/examples/js/loaders/STLLoader.js"
                 data-name="r52"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r52">r52</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r51/examples/js/loaders/STLLoader.js"
                 data-name="r51"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r51">r51</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r50/examples/js/loaders/STLLoader.js"
                 data-name="r50"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r50">r50</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r49/examples/js/loaders/STLLoader.js"
                 data-name="r49"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r49">r49</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r48/examples/js/loaders/STLLoader.js"
                 data-name="r48"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r48">r48</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r47/examples/js/loaders/STLLoader.js"
                 data-name="r47"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r47">r47</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r46/examples/js/loaders/STLLoader.js"
                 data-name="r46"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r46">r46</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r45/examples/js/loaders/STLLoader.js"
                 data-name="r45"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r45">r45</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r44/examples/js/loaders/STLLoader.js"
                 data-name="r44"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r44">r44</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r43/examples/js/loaders/STLLoader.js"
                 data-name="r43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r43">r43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r42/examples/js/loaders/STLLoader.js"
                 data-name="r42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r42">r42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r41/ROME/examples/js/loaders/STLLoader.js"
                 data-name="r41/ROME"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r41/ROME">r41/ROME</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r40/examples/js/loaders/STLLoader.js"
                 data-name="r40"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r40">r40</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r39/examples/js/loaders/STLLoader.js"
                 data-name="r39"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r39">r39</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r38/examples/js/loaders/STLLoader.js"
                 data-name="r38"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r38">r38</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r37/examples/js/loaders/STLLoader.js"
                 data-name="r37"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r37">r37</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r36/examples/js/loaders/STLLoader.js"
                 data-name="r36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r36">r36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r35/examples/js/loaders/STLLoader.js"
                 data-name="r35"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r35">r35</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r34/examples/js/loaders/STLLoader.js"
                 data-name="r34"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r34">r34</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r33/examples/js/loaders/STLLoader.js"
                 data-name="r33"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r33">r33</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r32/examples/js/loaders/STLLoader.js"
                 data-name="r32"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r32">r32</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r31/examples/js/loaders/STLLoader.js"
                 data-name="r31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r31">r31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r30/examples/js/loaders/STLLoader.js"
                 data-name="r30"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r30">r30</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r29/examples/js/loaders/STLLoader.js"
                 data-name="r29"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r29">r29</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r28/examples/js/loaders/STLLoader.js"
                 data-name="r28"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r28">r28</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r25/examples/js/loaders/STLLoader.js"
                 data-name="r25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r25">r25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r18/examples/js/loaders/STLLoader.js"
                 data-name="r18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r18">r18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r17/examples/js/loaders/STLLoader.js"
                 data-name="r17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r17">r17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r16/examples/js/loaders/STLLoader.js"
                 data-name="r16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r16">r16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r15/examples/js/loaders/STLLoader.js"
                 data-name="r15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r15">r15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r14/examples/js/loaders/STLLoader.js"
                 data-name="r14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r14">r14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r13/examples/js/loaders/STLLoader.js"
                 data-name="r13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r13">r13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r12/examples/js/loaders/STLLoader.js"
                 data-name="r12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r12">r12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r11/examples/js/loaders/STLLoader.js"
                 data-name="r11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r11">r11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r10/examples/js/loaders/STLLoader.js"
                 data-name="r10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r10">r10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r9/examples/js/loaders/STLLoader.js"
                 data-name="r9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r9">r9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r8/examples/js/loaders/STLLoader.js"
                 data-name="r8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r8">r8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r7/examples/js/loaders/STLLoader.js"
                 data-name="r7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r7">r7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r6/examples/js/loaders/STLLoader.js"
                 data-name="r6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r6">r6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r5/examples/js/loaders/STLLoader.js"
                 data-name="r5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r5">r5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r4/examples/js/loaders/STLLoader.js"
                 data-name="r4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r4">r4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r3/examples/js/loaders/STLLoader.js"
                 data-name="r3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r3">r3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r2/examples/js/loaders/STLLoader.js"
                 data-name="r2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r2">r2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mrdoob/three.js/tree/r1/examples/js/loaders/STLLoader.js"
                 data-name="r1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="r1">r1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">three.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/master/examples" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">examples</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/master/examples/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mrdoob/three.js/tree/master/examples/js/loaders" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">loaders</span></a></span><span class="separator"> / </span><strong class="final-path">STLLoader.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="examples/js/loaders/STLLoader.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Mr.doob" class="main-avatar js-avatar" data-user="97088" height="24" src="https://avatars3.githubusercontent.com/u/97088?s=140" width="24" />
      <span class="author"><a href="/mrdoob" rel="author">mrdoob</a></span>
      <time datetime="2014-04-24T13:02:20-04:00" is="relative-time">April 24, 2014</time>
      <div class="commit-title">
          <a href="/mrdoob/three.js/commit/adb27e0c667cf627e57d4662d339feb4cdb136a5" class="message" data-pjax="true" title="Renamed *Geometry2 to *TypedGeometry">Renamed *Geometry2 to *TypedGeometry</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="mrdoob" href="/mrdoob/three.js/commits/master/examples/js/loaders/STLLoader.js?author=mrdoob"><img alt="Mr.doob" class=" js-avatar" data-user="97088" height="20" src="https://avatars3.githubusercontent.com/u/97088?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="aleeper" href="/mrdoob/three.js/commits/master/examples/js/loaders/STLLoader.js?author=aleeper"><img alt="Adam Leeper" class=" js-avatar" data-user="1366105" height="20" src="https://avatars3.githubusercontent.com/u/1366105?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="gero3" href="/mrdoob/three.js/commits/master/examples/js/loaders/STLLoader.js?author=gero3"><img alt="gero3" class=" js-avatar" data-user="155535" height="20" src="https://avatars0.githubusercontent.com/u/155535?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="alteredq" href="/mrdoob/three.js/commits/master/examples/js/loaders/STLLoader.js?author=alteredq"><img alt="AlteredQualia" class=" js-avatar" data-user="438022" height="20" src="https://avatars0.githubusercontent.com/u/438022?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="SkeLLLa" href="/mrdoob/three.js/commits/master/examples/js/loaders/STLLoader.js?author=SkeLLLa"><img alt="Alexander" class=" js-avatar" data-user="2273103" height="20" src="https://avatars0.githubusercontent.com/u/2273103?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mr.doob" class=" js-avatar" data-user="97088" height="24" src="https://avatars3.githubusercontent.com/u/97088?s=140" width="24" />
            <a href="/mrdoob">mrdoob</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Leeper" class=" js-avatar" data-user="1366105" height="24" src="https://avatars3.githubusercontent.com/u/1366105?s=140" width="24" />
            <a href="/aleeper">aleeper</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="gero3" class=" js-avatar" data-user="155535" height="24" src="https://avatars0.githubusercontent.com/u/155535?s=140" width="24" />
            <a href="/gero3">gero3</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="AlteredQualia" class=" js-avatar" data-user="438022" height="24" src="https://avatars0.githubusercontent.com/u/438022?s=140" width="24" />
            <a href="/alteredq">alteredq</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alexander" class=" js-avatar" data-user="2273103" height="24" src="https://avatars0.githubusercontent.com/u/2273103?s=140" width="24" />
            <a href="/SkeLLLa">SkeLLLa</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>379 lines (245 sloc)</span>
          <span class="meta-divider"></span>
        <span>9.392 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/mrdoob/three.js/raw/master/examples/js/loaders/STLLoader.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/mrdoob/three.js/blame/master/examples/js/loaders/STLLoader.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/mrdoob/three.js/commits/master/examples/js/loaders/STLLoader.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @author aleeper / http://adamleeper.com/</span></div><div class='line' id='LC3'><span class="cm"> * @author mrdoob / http://mrdoob.com/</span></div><div class='line' id='LC4'><span class="cm"> * @author gero3 / https://github.com/gero3</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.</span></div><div class='line' id='LC7'><span class="cm"> *</span></div><div class='line' id='LC8'><span class="cm"> * Supports both binary and ASCII encoded files, with automatic detection of type.</span></div><div class='line' id='LC9'><span class="cm"> *</span></div><div class='line' id='LC10'><span class="cm"> * Limitations:</span></div><div class='line' id='LC11'><span class="cm"> * 	Binary decoding ignores header. There doesn&#39;t seem to be much of a use for it.</span></div><div class='line' id='LC12'><span class="cm"> * 	There is perhaps some question as to how valid it is to always assume little-endian-ness.</span></div><div class='line' id='LC13'><span class="cm"> * 	ASCII decoding assumes file is UTF-8. Seems to work for the examples...</span></div><div class='line' id='LC14'><span class="cm"> *</span></div><div class='line' id='LC15'><span class="cm"> * Usage:</span></div><div class='line' id='LC16'><span class="cm"> * 	var loader = new THREE.STLLoader();</span></div><div class='line' id='LC17'><span class="cm"> * 	loader.addEventListener( &#39;load&#39;, function ( event ) {</span></div><div class='line' id='LC18'><span class="cm"> *</span></div><div class='line' id='LC19'><span class="cm"> * 		var geometry = event.content;</span></div><div class='line' id='LC20'><span class="cm"> * 		scene.add( new THREE.Mesh( geometry ) );</span></div><div class='line' id='LC21'><span class="cm"> *</span></div><div class='line' id='LC22'><span class="cm"> * 	} );</span></div><div class='line' id='LC23'><span class="cm"> * 	loader.load( &#39;./models/stl/slotted_disk.stl&#39; );</span></div><div class='line' id='LC24'><span class="cm"> */</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>	<span class="nx">constructor</span><span class="o">:</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="p">};</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">load</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">callback</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>	<span class="kd">var</span> <span class="nx">scope</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>	<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>	<span class="kd">function</span> <span class="nx">onloaded</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>		<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">status</span> <span class="o">===</span> <span class="mi">200</span> <span class="o">||</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">status</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>			<span class="kd">var</span> <span class="nx">geometry</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">response</span> <span class="o">||</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">responseText</span> <span class="p">);</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">content</span><span class="o">:</span> <span class="nx">geometry</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">callback</span> <span class="p">)</span> <span class="nx">callback</span><span class="p">(</span> <span class="nx">geometry</span> <span class="p">);</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>			<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="nx">message</span><span class="o">:</span> <span class="s1">&#39;Couldn\&#39;t load URL [&#39;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">,</span> <span class="nx">response</span><span class="o">:</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">responseText</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>		<span class="p">}</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>	<span class="p">}</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nx">onloaded</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;progress&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;progress&#39;</span><span class="p">,</span> <span class="nx">loaded</span><span class="o">:</span> <span class="nx">event</span><span class="p">.</span><span class="nx">loaded</span><span class="p">,</span> <span class="nx">total</span><span class="o">:</span> <span class="nx">event</span><span class="p">.</span><span class="nx">total</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>	<span class="p">},</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'>		<span class="nx">scope</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="nx">message</span><span class="o">:</span> <span class="s1">&#39;Couldn\&#39;t load URL [&#39;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span> <span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>	<span class="p">},</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	<span class="k">if</span> <span class="p">(</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">overrideMimeType</span> <span class="p">)</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">overrideMimeType</span><span class="p">(</span> <span class="s1">&#39;text/plain; charset=x-user-defined&#39;</span> <span class="p">);</span></div><div class='line' id='LC74'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span> <span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC75'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">responseType</span> <span class="o">=</span> <span class="s1">&#39;arraybuffer&#39;</span><span class="p">;</span></div><div class='line' id='LC76'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span> <span class="kc">null</span> <span class="p">);</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'><span class="p">};</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>	<span class="kd">var</span> <span class="nx">isBinary</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>		<span class="kd">var</span> <span class="nx">expect</span><span class="p">,</span> <span class="nx">face_size</span><span class="p">,</span> <span class="nx">n_faces</span><span class="p">,</span> <span class="nx">reader</span><span class="p">;</span></div><div class='line' id='LC86'>		<span class="nx">reader</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">DataView</span><span class="p">(</span> <span class="nx">binData</span> <span class="p">);</span></div><div class='line' id='LC87'>		<span class="nx">face_size</span> <span class="o">=</span> <span class="p">(</span><span class="mi">32</span> <span class="o">/</span> <span class="mi">8</span> <span class="o">*</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="p">((</span><span class="mi">32</span> <span class="o">/</span> <span class="mi">8</span> <span class="o">*</span> <span class="mi">3</span><span class="p">)</span> <span class="o">*</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="mi">16</span> <span class="o">/</span> <span class="mi">8</span><span class="p">);</span></div><div class='line' id='LC88'>		<span class="nx">n_faces</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getUint32</span><span class="p">(</span><span class="mi">80</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC89'>		<span class="nx">expect</span> <span class="o">=</span> <span class="mi">80</span> <span class="o">+</span> <span class="p">(</span><span class="mi">32</span> <span class="o">/</span> <span class="mi">8</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">n_faces</span> <span class="o">*</span> <span class="nx">face_size</span><span class="p">);</span></div><div class='line' id='LC90'>		<span class="k">return</span> <span class="nx">expect</span> <span class="o">===</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">byteLength</span><span class="p">;</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>	<span class="p">};</span></div><div class='line' id='LC93'><br/></div><div class='line' id='LC94'>	<span class="kd">var</span> <span class="nx">binData</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">ensureBinary</span><span class="p">(</span> <span class="nx">data</span> <span class="p">);</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>	<span class="k">return</span> <span class="nx">isBinary</span><span class="p">()</span></div><div class='line' id='LC97'>		<span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseBinary</span><span class="p">(</span> <span class="nx">binData</span> <span class="p">)</span></div><div class='line' id='LC98'>		<span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">parseASCII</span><span class="p">(</span> <span class="k">this</span><span class="p">.</span><span class="nx">ensureString</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'><span class="p">};</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parseBinary</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>	<span class="kd">var</span> <span class="nx">reader</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">DataView</span><span class="p">(</span> <span class="nx">data</span> <span class="p">);</span></div><div class='line' id='LC105'>	<span class="kd">var</span> <span class="nx">faces</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getUint32</span><span class="p">(</span> <span class="mi">80</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC106'>	<span class="kd">var</span> <span class="nx">dataOffset</span> <span class="o">=</span> <span class="mi">84</span><span class="p">;</span></div><div class='line' id='LC107'>	<span class="kd">var</span> <span class="nx">faceLength</span> <span class="o">=</span> <span class="mi">12</span> <span class="o">*</span> <span class="mi">4</span> <span class="o">+</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>	<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>	<span class="kd">var</span> <span class="nx">geometry</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">TypedGeometry</span><span class="p">(</span> <span class="nx">faces</span> <span class="p">);</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>	<span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">face</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">face</span> <span class="o">&lt;</span> <span class="nx">faces</span><span class="p">;</span> <span class="nx">face</span> <span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>		<span class="kd">var</span> <span class="nx">start</span> <span class="o">=</span> <span class="nx">dataOffset</span> <span class="o">+</span> <span class="nx">face</span> <span class="o">*</span> <span class="nx">faceLength</span><span class="p">;</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>		<span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;=</span> <span class="mi">3</span><span class="p">;</span> <span class="nx">i</span> <span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>			<span class="kd">var</span> <span class="nx">vertexstart</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">+</span> <span class="nx">i</span> <span class="o">*</span> <span class="mi">12</span><span class="p">;</span></div><div class='line' id='LC120'><br/></div><div class='line' id='LC121'>			<span class="nx">geometry</span><span class="p">.</span><span class="nx">vertices</span><span class="p">[</span> <span class="nx">offset</span>     <span class="p">]</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getFloat32</span><span class="p">(</span> <span class="nx">vertexstart</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC122'>			<span class="nx">geometry</span><span class="p">.</span><span class="nx">vertices</span><span class="p">[</span> <span class="nx">offset</span> <span class="o">+</span> <span class="mi">1</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getFloat32</span><span class="p">(</span> <span class="nx">vertexstart</span> <span class="o">+</span> <span class="mi">4</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC123'>			<span class="nx">geometry</span><span class="p">.</span><span class="nx">vertices</span><span class="p">[</span> <span class="nx">offset</span> <span class="o">+</span> <span class="mi">2</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getFloat32</span><span class="p">(</span> <span class="nx">vertexstart</span> <span class="o">+</span> <span class="mi">8</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>			<span class="nx">geometry</span><span class="p">.</span><span class="nx">normals</span><span class="p">[</span> <span class="nx">offset</span>     <span class="p">]</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getFloat32</span><span class="p">(</span> <span class="nx">start</span>    <span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC126'>			<span class="nx">geometry</span><span class="p">.</span><span class="nx">normals</span><span class="p">[</span> <span class="nx">offset</span> <span class="o">+</span> <span class="mi">1</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getFloat32</span><span class="p">(</span> <span class="nx">start</span> <span class="o">+</span> <span class="mi">4</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC127'>			<span class="nx">geometry</span><span class="p">.</span><span class="nx">normals</span><span class="p">[</span> <span class="nx">offset</span> <span class="o">+</span> <span class="mi">2</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">reader</span><span class="p">.</span><span class="nx">getFloat32</span><span class="p">(</span> <span class="nx">start</span> <span class="o">+</span> <span class="mi">8</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>			<span class="nx">offset</span> <span class="o">+=</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>		<span class="p">}</span></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>	<span class="p">}</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>	<span class="k">return</span> <span class="nx">geometry</span><span class="p">;</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'><span class="p">};</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">parseASCII</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>	<span class="kd">var</span> <span class="nx">geometry</span><span class="p">,</span> <span class="nx">length</span><span class="p">,</span> <span class="nx">normal</span><span class="p">,</span> <span class="nx">patternFace</span><span class="p">,</span> <span class="nx">patternNormal</span><span class="p">,</span> <span class="nx">patternVertex</span><span class="p">,</span> <span class="nx">result</span><span class="p">,</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC142'>	<span class="nx">geometry</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Geometry</span><span class="p">();</span></div><div class='line' id='LC143'>	<span class="nx">patternFace</span> <span class="o">=</span> <span class="sr">/facet([\s\S]*?)endfacet/g</span><span class="p">;</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>	<span class="k">while</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">patternFace</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">data</span> <span class="p">)</span> <span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>		<span class="nx">text</span> <span class="o">=</span> <span class="nx">result</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC148'>		<span class="nx">patternNormal</span> <span class="o">=</span> <span class="sr">/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g</span><span class="p">;</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'>		<span class="k">while</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">patternNormal</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">text</span> <span class="p">)</span> <span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>			<span class="nx">normal</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">(</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">result</span><span class="p">[</span> <span class="mi">1</span> <span class="p">]</span> <span class="p">),</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">result</span><span class="p">[</span> <span class="mi">3</span> <span class="p">]</span> <span class="p">),</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">result</span><span class="p">[</span> <span class="mi">5</span> <span class="p">]</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>		<span class="p">}</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="nx">patternVertex</span> <span class="o">=</span> <span class="sr">/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g</span><span class="p">;</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>		<span class="k">while</span> <span class="p">(</span> <span class="p">(</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">patternVertex</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">text</span> <span class="p">)</span> <span class="p">)</span> <span class="o">!==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>			<span class="nx">geometry</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Vector3</span><span class="p">(</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">result</span><span class="p">[</span> <span class="mi">1</span> <span class="p">]</span> <span class="p">),</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">result</span><span class="p">[</span> <span class="mi">3</span> <span class="p">]</span> <span class="p">),</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">result</span><span class="p">[</span> <span class="mi">5</span> <span class="p">]</span> <span class="p">)</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>		<span class="p">}</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>		<span class="nx">length</span> <span class="o">=</span> <span class="nx">geometry</span><span class="p">.</span><span class="nx">vertices</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>		<span class="nx">geometry</span><span class="p">.</span><span class="nx">faces</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="k">new</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">Face3</span><span class="p">(</span> <span class="nx">length</span> <span class="o">-</span> <span class="mi">3</span><span class="p">,</span> <span class="nx">length</span> <span class="o">-</span> <span class="mi">2</span><span class="p">,</span> <span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">normal</span> <span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>	<span class="p">}</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>	<span class="nx">geometry</span><span class="p">.</span><span class="nx">computeBoundingBox</span><span class="p">();</span></div><div class='line' id='LC171'>	<span class="nx">geometry</span><span class="p">.</span><span class="nx">computeBoundingSphere</span><span class="p">();</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>	<span class="k">return</span> <span class="nx">geometry</span><span class="p">;</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'><span class="p">};</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">ensureString</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">buf</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">buf</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span><span class="p">){</span></div><div class='line' id='LC180'>		<span class="kd">var</span> <span class="nx">array_buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">buf</span><span class="p">);</span></div><div class='line' id='LC181'>		<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC182'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">buf</span><span class="p">.</span><span class="nx">byteLength</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC183'>			<span class="nx">str</span> <span class="o">+=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">array_buffer</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span> <span class="c1">// implicitly assumes little-endian</span></div><div class='line' id='LC184'>		<span class="p">}</span></div><div class='line' id='LC185'>		<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC186'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC187'>		<span class="k">return</span> <span class="nx">buf</span><span class="p">;</span></div><div class='line' id='LC188'>	<span class="p">}</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'><span class="p">};</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'><span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">ensureBinary</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">buf</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">buf</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">){</span></div><div class='line' id='LC195'>		<span class="kd">var</span> <span class="nx">array_buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Uint8Array</span><span class="p">(</span><span class="nx">buf</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC196'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">buf</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC197'>			<span class="nx">array_buffer</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">buf</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">;</span> <span class="c1">// implicitly assumes little-endian</span></div><div class='line' id='LC198'>		<span class="p">}</span></div><div class='line' id='LC199'>		<span class="k">return</span> <span class="nx">array_buffer</span><span class="p">.</span><span class="nx">buffer</span> <span class="o">||</span> <span class="nx">array_buffer</span><span class="p">;</span></div><div class='line' id='LC200'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC201'>		<span class="k">return</span> <span class="nx">buf</span><span class="p">;</span></div><div class='line' id='LC202'>	<span class="p">}</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'><span class="p">};</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'><span class="nx">THREE</span><span class="p">.</span><span class="nx">EventDispatcher</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="nx">THREE</span><span class="p">.</span><span class="nx">STLLoader</span><span class="p">.</span><span class="nx">prototype</span> <span class="p">);</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'><span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">DataView</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">){</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>	<span class="nx">DataView</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">buffer</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">byteLength</span><span class="p">){</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>		<span class="k">this</span><span class="p">.</span><span class="nx">buffer</span> <span class="o">=</span> <span class="nx">buffer</span><span class="p">;</span></div><div class='line' id='LC213'>		<span class="k">this</span><span class="p">.</span><span class="nx">byteOffset</span> <span class="o">=</span> <span class="nx">byteOffset</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC214'>		<span class="k">this</span><span class="p">.</span><span class="nx">byteLength</span> <span class="o">=</span> <span class="nx">byteLength</span> <span class="o">||</span> <span class="nx">buffer</span><span class="p">.</span><span class="nx">byteLength</span> <span class="o">||</span> <span class="nx">buffer</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC215'>		<span class="k">this</span><span class="p">.</span><span class="nx">_isString</span> <span class="o">=</span> <span class="k">typeof</span> <span class="nx">buffer</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span><span class="p">;</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>	<span class="p">}</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>	<span class="nx">DataView</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC220'><br/></div><div class='line' id='LC221'>		<span class="nx">_getCharCodes</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">buffer</span><span class="p">,</span><span class="nx">start</span><span class="p">,</span><span class="nx">length</span><span class="p">){</span></div><div class='line' id='LC222'>			<span class="nx">start</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC223'>			<span class="nx">length</span> <span class="o">=</span> <span class="nx">length</span> <span class="o">||</span> <span class="nx">buffer</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC224'>			<span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">+</span> <span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC225'>			<span class="kd">var</span> <span class="nx">codes</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC226'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">start</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">end</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC227'>				<span class="nx">codes</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">buffer</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">);</span></div><div class='line' id='LC228'>			<span class="p">}</span></div><div class='line' id='LC229'>			<span class="k">return</span> <span class="nx">codes</span><span class="p">;</span></div><div class='line' id='LC230'>		<span class="p">},</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>		<span class="nx">_getBytes</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">length</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>			<span class="kd">var</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>			<span class="c1">// Handle the lack of endianness</span></div><div class='line' id='LC237'>			<span class="k">if</span> <span class="p">(</span><span class="nx">littleEndian</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'>				<span class="nx">littleEndian</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_littleEndian</span><span class="p">;</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>			<span class="p">}</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>			<span class="c1">// Handle the lack of byteOffset</span></div><div class='line' id='LC244'>			<span class="k">if</span> <span class="p">(</span><span class="nx">byteOffset</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>				<span class="nx">byteOffset</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">byteOffset</span><span class="p">;</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'>				<span class="nx">byteOffset</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">byteOffset</span> <span class="o">+</span> <span class="nx">byteOffset</span><span class="p">;</span></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'>			<span class="p">}</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>			<span class="k">if</span> <span class="p">(</span><span class="nx">length</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC255'><br/></div><div class='line' id='LC256'>				<span class="nx">length</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">byteLength</span> <span class="o">-</span> <span class="nx">byteOffset</span><span class="p">;</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>			<span class="p">}</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>			<span class="c1">// Error Checking</span></div><div class='line' id='LC261'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">byteOffset</span> <span class="o">!==</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>				<span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="s1">&#39;DataView byteOffset is not a number&#39;</span><span class="p">);</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>			<span class="p">}</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>			<span class="k">if</span> <span class="p">(</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">byteOffset</span> <span class="o">+</span> <span class="nx">length</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">byteLength</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;DataView length or (byteOffset+length) value is out of bounds&#39;</span><span class="p">);</span></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'>			<span class="p">}</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">isString</span><span class="p">){</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'>				<span class="nx">result</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getCharCodes</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">buffer</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">byteOffset</span> <span class="o">+</span> <span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>				<span class="nx">result</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">buffer</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">byteOffset</span> <span class="o">+</span> <span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'>			<span class="p">}</span></div><div class='line' id='LC282'><br/></div><div class='line' id='LC283'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">littleEndian</span> <span class="o">&amp;&amp;</span> <span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">result</span> <span class="k">instanceof</span> <span class="nb">Array</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>					<span class="nx">result</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">result</span><span class="p">);</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'>				<span class="p">}</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>				<span class="nx">result</span><span class="p">.</span><span class="nx">reverse</span><span class="p">();</span></div><div class='line' id='LC292'>			<span class="p">}</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>		<span class="p">},</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>		<span class="c1">// Compatibility functions on a String Buffer</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>		<span class="nx">getFloat64</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>			<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getBytes</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">),</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>				<span class="nx">sign</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">-</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span> <span class="o">&gt;&gt;</span> <span class="mi">7</span><span class="p">)),</span></div><div class='line' id='LC305'>				<span class="nx">exponent</span> <span class="o">=</span> <span class="p">((((</span><span class="nx">b</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">3</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span> <span class="o">&gt;&gt;</span> <span class="mi">4</span><span class="p">))</span> <span class="o">-</span> <span class="p">((</span><span class="mi">1</span> <span class="o">&lt;&lt;</span> <span class="mi">10</span><span class="p">)</span> <span class="o">-</span> <span class="mi">1</span><span class="p">),</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>			<span class="c1">// Binary operators such as | and &lt;&lt; operate on 32 bit values, using + and Math.pow(2) instead</span></div><div class='line' id='LC308'>				<span class="nx">mantissa</span> <span class="o">=</span> <span class="p">((</span><span class="nx">b</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0x0f</span><span class="p">)</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">48</span><span class="p">))</span> <span class="o">+</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">40</span><span class="p">))</span> <span class="o">+</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">32</span><span class="p">))</span> <span class="o">+</span></div><div class='line' id='LC309'>							<span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">24</span><span class="p">))</span> <span class="o">+</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">16</span><span class="p">))</span> <span class="o">+</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">8</span><span class="p">))</span> <span class="o">+</span> <span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'>			<span class="k">if</span> <span class="p">(</span><span class="nx">exponent</span> <span class="o">===</span> <span class="mi">1024</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC312'>				<span class="k">if</span> <span class="p">(</span><span class="nx">mantissa</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC313'>					<span class="k">return</span> <span class="kc">NaN</span><span class="p">;</span></div><div class='line' id='LC314'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC315'>					<span class="k">return</span> <span class="nx">sign</span> <span class="o">*</span> <span class="kc">Infinity</span><span class="p">;</span></div><div class='line' id='LC316'>				<span class="p">}</span></div><div class='line' id='LC317'>			<span class="p">}</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>			<span class="k">if</span> <span class="p">(</span><span class="nx">exponent</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1023</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Denormalized</span></div><div class='line' id='LC320'>				<span class="k">return</span> <span class="nx">sign</span> <span class="o">*</span> <span class="nx">mantissa</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">1022</span> <span class="o">-</span> <span class="mi">52</span><span class="p">);</span></div><div class='line' id='LC321'>			<span class="p">}</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>			<span class="k">return</span> <span class="nx">sign</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="nx">mantissa</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">52</span><span class="p">))</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="nx">exponent</span><span class="p">);</span></div><div class='line' id='LC324'><br/></div><div class='line' id='LC325'>		<span class="p">},</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>		<span class="nx">getFloat32</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC328'><br/></div><div class='line' id='LC329'>			<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getBytes</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">),</span></div><div class='line' id='LC330'><br/></div><div class='line' id='LC331'>				<span class="nx">sign</span> <span class="o">=</span> <span class="mi">1</span> <span class="o">-</span> <span class="p">(</span><span class="mi">2</span> <span class="o">*</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">&gt;&gt;</span> <span class="mi">7</span><span class="p">)),</span></div><div class='line' id='LC332'>				<span class="nx">exponent</span> <span class="o">=</span> <span class="p">(((</span><span class="nx">b</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">1</span><span class="p">)</span> <span class="o">&amp;</span> <span class="mh">0xff</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">&gt;&gt;</span> <span class="mi">7</span><span class="p">))</span> <span class="o">-</span> <span class="mi">127</span><span class="p">,</span></div><div class='line' id='LC333'>				<span class="nx">mantissa</span> <span class="o">=</span> <span class="p">((</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">&amp;</span> <span class="mh">0x7f</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">|</span> <span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC334'><br/></div><div class='line' id='LC335'>			<span class="k">if</span> <span class="p">(</span><span class="nx">exponent</span> <span class="o">===</span> <span class="mi">128</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC336'>				<span class="k">if</span> <span class="p">(</span><span class="nx">mantissa</span> <span class="o">!==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC337'>					<span class="k">return</span> <span class="kc">NaN</span><span class="p">;</span></div><div class='line' id='LC338'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC339'>					<span class="k">return</span> <span class="nx">sign</span> <span class="o">*</span> <span class="kc">Infinity</span><span class="p">;</span></div><div class='line' id='LC340'>				<span class="p">}</span></div><div class='line' id='LC341'>			<span class="p">}</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>			<span class="k">if</span> <span class="p">(</span><span class="nx">exponent</span> <span class="o">===</span> <span class="o">-</span><span class="mi">127</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Denormalized</span></div><div class='line' id='LC344'>				<span class="k">return</span> <span class="nx">sign</span> <span class="o">*</span> <span class="nx">mantissa</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">126</span> <span class="o">-</span> <span class="mi">23</span><span class="p">);</span></div><div class='line' id='LC345'>			<span class="p">}</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>			<span class="k">return</span> <span class="nx">sign</span> <span class="o">*</span> <span class="p">(</span><span class="mi">1</span> <span class="o">+</span> <span class="nx">mantissa</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">23</span><span class="p">))</span> <span class="o">*</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">pow</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="nx">exponent</span><span class="p">);</span></div><div class='line' id='LC348'>		<span class="p">},</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>		<span class="nx">getInt32</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>			<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getBytes</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">);</span></div><div class='line' id='LC352'>			<span class="k">return</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">24</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">|</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">|</span> <span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC353'>		<span class="p">},</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>		<span class="nx">getUint32</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC356'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">getInt32</span><span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="o">&gt;&gt;&gt;</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC357'>		<span class="p">},</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>		<span class="nx">getInt16</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC360'>			<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUint16</span><span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">16</span><span class="p">)</span> <span class="o">&gt;&gt;</span> <span class="mi">16</span><span class="p">;</span></div><div class='line' id='LC361'>		<span class="p">},</span></div><div class='line' id='LC362'><br/></div><div class='line' id='LC363'>		<span class="nx">getUint16</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'>			<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getBytes</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">,</span> <span class="nx">littleEndian</span><span class="p">);</span></div><div class='line' id='LC365'>			<span class="k">return</span> <span class="p">(</span><span class="nx">b</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">&lt;&lt;</span> <span class="mi">8</span><span class="p">)</span> <span class="o">|</span> <span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC366'>		<span class="p">},</span></div><div class='line' id='LC367'><br/></div><div class='line' id='LC368'>		<span class="nx">getInt8</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC369'>			<span class="k">return</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUint8</span><span class="p">(</span><span class="nx">byteOffset</span><span class="p">)</span> <span class="o">&lt;&lt;</span> <span class="mi">24</span><span class="p">)</span> <span class="o">&gt;&gt;</span> <span class="mi">24</span><span class="p">;</span></div><div class='line' id='LC370'>		<span class="p">},</span></div><div class='line' id='LC371'><br/></div><div class='line' id='LC372'>		<span class="nx">getUint8</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">byteOffset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC373'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_getBytes</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">byteOffset</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC374'>		<span class="p">}</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>	 <span class="p">};</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'><span class="p">}</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03526s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-e87aa86ffae369acf33a96bb6567b2b57183be57.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-100ee281915e20c71d6b0ff254fbbb70b3fcaf3a.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

