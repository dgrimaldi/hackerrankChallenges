<div class="content-text challenge-text mlB hackdown-container theme-m"><div class="challenge-body-html"><div class="challenge_problem_statement"><div class="msB challenge_problem_statement_body"><div class="hackdown-content"><style id="MathJax_SVG_styles">.MathJax_SVG_Display {text-align: center; margin: 1em 0em; position: relative; display: block!important; text-indent: 0; max-width: none; max-height: none; min-width: 0; min-height: 0; width: 100%}
.MathJax_SVG .MJX-monospace {font-family: monospace}
.MathJax_SVG .MJX-sans-serif {font-family: sans-serif}
.MathJax_SVG {display: inline; font-style: normal; font-weight: normal; line-height: normal; font-size: 100%; font-size-adjust: none; text-indent: 0; text-align: left; text-transform: none; letter-spacing: normal; word-spacing: normal; word-wrap: normal; white-space: nowrap; float: none; direction: ltr; max-width: none; max-height: none; min-width: 0; min-height: 0; border: 0; padding: 0; margin: 0}
.MathJax_SVG * {transition: none; -webkit-transition: none; -moz-transition: none; -ms-transition: none; -o-transition: none}
.mjx-svg-href {fill: blue; stroke: blue}
.MathJax_SVG_LineBox {display: table!important}
.MathJax_SVG_LineBox span {display: table-cell!important; width: 10000em!important; min-width: 0; max-width: none; padding: 0; border: 0; margin: 0}
</style><p>An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses <a href="https://en.wikipedia.org/wiki/Ranking#Dense_ranking_.28.221223.22_ranking.29">Dense Ranking</a>, so its leaderboard works like this:  </p>

<ul>
<li>The player with the highest score is ranked number <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-1-Frame"><svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.162ex" height="2.176ex" style="vertical-align: -0.338ex;" viewBox="0 -791.3 500.5 936.9" role="img" focusable="false"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><path stroke-width="1" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></g></svg></span> on the leaderboard. </li>
<li>Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.</li>
</ul>

<p><strong>Example</strong></p>

<p>ranked = [100, 90, 90, 80]</p>
<p>player = [70, 80, 105]</p>

<p>The ranked players will have ranks 1,2,2 and 3, respectively.  If the player's scores are 70, 80 and 105, their rankings after each game are 4th and 3rd. Return [4, 3, 1]
<p><strong>Function Description</strong>  </p>

<p>Complete the <em>climbingLeaderboard</em> function in the editor below.  </p>

<p>climbingLeaderboard has the following parameter(s):  </p>

<ul>
<li><em>int ranked[n]</em>: the leaderboard scores  </li>
<li><em>int player[m]</em>: the player's scores  </li>
</ul>

<p><strong>Returns</strong>  </p>

<ul>
<li><em>int[m]:</em>  the player's rank after each new score</li>
</ul></div></div></div>


<div class="msB challenge_input_format_body"><div class="hackdown-content">
<p>The first line contains an integer n, the number of players on the leaderboard. <br>
<p>The next line contains n space-separated integers ranked[i], the leaderboard scores in decreasing order.</p>
<p>The next line contains an integer, m, the number games the player plays.</p>
<p>The last line contains m space-separated integers player[j], the game scores.</p>
<p><strong>Subtask</strong></p></div></div></div></div>

for 60% of maximum score:

1 <= n <= 200

1 <= m <= 200

</svg></div></div></pre></div></div></div></div></div></div></div>