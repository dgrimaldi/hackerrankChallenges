<p>An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses <a href="https://en.wikipedia.org/wiki/Ranking#Dense_ranking_.28.221223.22_ranking.29">Dense Ranking</a>, so its leaderboard works like this:  </p>

<ul>
<li>The player with the highest score is ranked number on the leaderboard. </li>
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
